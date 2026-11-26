"""Create a portable, source-only GitHub/Vercel archive beside the project."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
output = root.parent / 'Sugar-and-Aura-GitHub-Ready.zip'
folders = ['app', 'components', 'lib', 'public', 'scripts', 'tests']
files = ['package.json', 'package-lock.json', 'next.config.ts', 'next-env.d.ts', 'tsconfig.json', 'postcss.config.mjs', 'eslint.config.mjs', '.gitignore', '.env.example', 'README.md', 'AGENTS.md', 'docs/asset-provenance.md', 'docs/branding/sugar-and-aura-official-original.jpg', 'docs/content-sources.md', 'docs/image-prompts.json']
paths = [root / f for f in files]
for folder in folders:
    paths.extend(p for p in (root / folder).rglob('*') if p.is_file() and not any(part.startswith('.') or part == '__pycache__' for part in p.relative_to(root).parts))
with ZipFile(output, 'w', ZIP_DEFLATED, compresslevel=9) as archive:
    for path in sorted(set(paths)):
        if not path.is_file():
            raise FileNotFoundError(path)
        archive.write(path, Path(root.name) / path.relative_to(root))
    names = archive.namelist()
    assert not any(any(part in {'node_modules', '.next', 'out', '.git', '.openai', '__pycache__'} for part in Path(name).parts) for name in names)
    assert not any(Path(name).name.startswith('.env') and Path(name).name != '.env.example' for name in names)
print(f'{output}\n{len(names)} files; {output.stat().st_size / 1024 / 1024:.2f} MiB')
