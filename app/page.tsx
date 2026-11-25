import Image from 'next/image';
import { ArrowDown, CalendarDays, Flower2, Heart, House, Sparkles } from 'lucide-react';
import { BookLink } from '@/components/book-link';
import { HeroEntrance, Reveal } from '@/components/entrance';
import { business } from '@/lib/config/business';

const services = [
  {
    id: 'sudanese-halwa',
    name: 'Sudanese Halwa',
    qualifier: 'Depilation',
    subtitle: 'Smooth skin, naturally',
    image: '/images/sudanese-halwa.webp',
    alt: 'Glossy dark brown Sudanese Halwa depilation paste balls in a small wooden bowl',
  },
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    subtitle: 'Your style, our care',
    image: '/images/hair.webp',
    alt: 'Glossy dark hair in soft sculpted waves against a warm ivory interior',
  },
  {
    id: 'manicure-pedicure',
    name: 'Manicure & Pedicure',
    subtitle: 'Beauty in every detail',
    image: '/images/manicure.webp',
    alt: 'Delicate nude pink manicure resting on ivory linen beside a white blossom',
  },
];

const benefits = [
  { Icon: House, title: 'We come to your home', text: 'Your familiar space. A beautifully personal ritual.' },
  { Icon: Flower2, title: 'Care in every detail', text: 'Space to discuss products, preparation and comfort.' },
  { Icon: Heart, title: 'Your moment, your way', text: 'Thoughtful details, shaped around your preferences.' },
  { Icon: Sparkles, title: 'Premium care at home', text: 'The pleasure of feeling beautifully looked after.' },
];

const ribbon = [
  { Icon: Flower2, title: 'Rooted in tradition', text: 'A considered beauty ritual' },
  { Icon: Heart, title: 'Personally yours', text: 'Your preferences, thoughtfully heard' },
  { Icon: House, title: 'Beautifully at home', text: 'Self-care, in your own space' },
];

export default function HomePage() {
  const [firstWord, ...treatmentWords] = business.descriptor.split(' ');
  return (
    <>
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-image">
          <Image
            src="/images/hero.webp"
            alt="Woman enjoying a lavender tea mug on an ivory sofa in a sunlit home"
            fill
            preload
            sizes="100vw"
          />
        </div>
        <div className="hero-wash" />
        <div className="container hero-container">
          <HeroEntrance className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />UAE Home-Service Beauty</p>
            <h1 id="hero-title">{firstWord} <br /><span>{treatmentWords.join(' ')}</span></h1>
            <p className="hero-mantra">Natural care. Real results.</p>
            <p className="hero-description">Beauty rituals inspired by tradition,<br /> thoughtfully brought to the comfort of your home.</p>
            <div className="hero-service-links">
              <a href="#hair-styling">Hair Styling</a>
              <span aria-hidden="true" />
              <a href="#manicure-pedicure">Manicure &amp; Pedicure</a>
            </div>
            <div className="hero-actions">
              <BookLink />
              <span className="priority-note">
                <CalendarDays size={24} strokeWidth={1.4} aria-hidden="true" />
                <span>Your beauty.<br />Our priority.</span>
              </span>
            </div>
          </HeroEntrance>
        </div>
        <div className="hero-script script" aria-hidden="true">More beautiful<br />days at home.<span>♡</span></div>
        <a className="hero-scroll" href="#our-rituals" aria-label="Explore our beauty services">
          <ArrowDown size={16} aria-hidden="true" /> <span>Scroll to discover</span>
        </a>
      </section>

      <div className="service-intro">
        <div className="container service-intro-grid">
          <section id="our-rituals" className="circle-services" aria-label="Beauty services">
            {services.map(({ id, name, qualifier, subtitle, image, alt }, index) => (
              <Reveal key={id} delay={index * .05}>
                <article id={id} className="circle-service">
                  <div className="circle-image">
                    <Image src={image} alt={alt} fill sizes="(max-width: 374px) 76px, (max-width: 767px) 90px, 116px" />
                  </div>
                  <h2>{name}{qualifier && <> <br />{qualifier}</>}</h2>
                  <span>{subtitle}</span>
                </article>
              </Reveal>
            ))}
          </section>
          <section className="mini-values" aria-label="At-home beauty benefits">
            {benefits.map(({ Icon, title, text }) => (
              <div key={title}>
                <Icon size={25} strokeWidth={1.15} aria-hidden="true" />
                <div><h2>{title}</h2><p>{text}</p></div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <section className="brand-ribbon" aria-label="The Sugar & Aura approach">
        <div className="container">
          {ribbon.map(({ Icon, title, text }) => (
            <span key={title}>
              <Icon size={27} strokeWidth={1.2} aria-hidden="true" />
              <span>{title}<small>{text}</small></span>
            </span>
          ))}
          <p className="script">Self-care feels <br />better at home <span aria-hidden="true">♡</span></p>
        </div>
      </section>
    </>
  );
}
