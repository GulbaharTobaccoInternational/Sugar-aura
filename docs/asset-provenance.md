# Asset provenance

The original six photographic assets were generated for this project with the built-in image-generation tool. None is stock photography, and none represents a verified client, provider, actual premises or completed treatment. Prompts and generation identifiers are preserved in `image-prompts.json`.

| Delivered asset | Purpose |
| --- | --- |
| `public/images/hero.webp` | Warm cream home portrait, lavender mug and robe; homepage campaign |
| `public/images/sudanese-halwa.webp` | Dark brown Halwa paste balls in a wooden bowl |
| `public/images/hair.webp` | Glossy soft-wave hair editorial |
| `public/images/manicure.webp` | Nude-pink nail editorial on ivory linen |
| `public/images/home-ritual.webp` | Quiet window-side self-care portrait |
| `public/images/pedicure.webp` | Pedicure editorial with towels and foot-care accessories |
| `public/images/og.jpg` | 1200 × 630 crop of the generated campaign portrait |

The photographs are delivered as optimized WebP files. `scripts/optimize-images.mjs` can create replacement WebP assets from a folder of newly generated PNG files with the same base filenames. Final site assets are bundled locally and require no access to the generator’s original output directory.

The supplied laptop photograph was used only as visual direction. Neither the laptop nor the screenshot is embedded in the website. The official logo is derived directly from the approved JPG in `branding/sugar-and-aura-official-original.jpg`. The optimized transparent logo and isolated butterfly retain the approved artwork. The favicon uses the same butterfly. Fontsource packages bundle the fonts under their included SIL Open Font License notices. Lucide supplies the interface icons under its ISC license.

## Phase 2 additions

Eight additional original photographs were generated with the built-in image-generation tool: `ritual-collection.webp`, `sugaring-ritual.webp`, `hair-chignon.webp`, `hair-sleek.webp`, `nail-detail.webp`, `heritage-still-life.webp`, `uae-courtyard.webp` and `beauty-arrival.webp`. They are locally optimized editorial illustrations. The architectural image depicts a Gulf-inspired setting, not a verified business property or a claim of service coverage. The treatment and hair/nail photographs are not evidence of actual providers or client results. Full prompts and generation identifiers are in `image-prompts.json`.


## Launch location imagery

Seven additional location-inspired editorial photographs illustrate Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. These were generated with the built-in image-generation tool and optimized locally as 1440px WebP assets in `public/images/emirates/`. They illustrate the intended enquiry locations; they do not represent branches, verified business premises or guaranteed operational coverage. All prompts and generation identifiers are in `image-prompts.json`.
