import React, { useState } from 'react';
import { Instagram, Mail, Phone, ArrowUpRight, Heart, Menu, X, Sparkles, ChevronRight, UserRound } from 'lucide-react';

const artwork = [
  {
    name: 'Resin Art',
    tag: 'Colour, captured',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85',
    alt: 'Colourful abstract art with layered textures'
  },
  {
    name: 'Crochet Art',
    tag: 'Loops of love',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85',
    alt: 'Handcrafted textile and yarn art'
  },
  {
    name: 'Pipe Cleaner Art',
    tag: 'Little happy things',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85',
    alt: 'Bright flowers arranged in a creative display'
  },
  {
    name: 'Lippan Art',
    tag: 'Tradition in detail',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85',
    alt: 'Decorative handcrafted wall art'
  },
  {
    name: 'Tote Bag Painting',
    tag: 'Art you can carry',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85',
    alt: 'Creative stationery and everyday accessories'
  }
];

const initialBookings = [
  'Custom art bookings — enquire for availability',
  'Personalised gifts — booking status to be updated',
  'Creative workshops — upcoming dates to be announced'
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@artistpuram.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      window.location.href = 'mailto:hello@artistpuram.com';
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-label"><span className="live-dot" /> BOOKING BOARD</span>
        <div className="ticker-window" aria-label="Current booking updates">
          <div className="ticker-track">
            {[...initialBookings, ...initialBookings].map((item, i) => (
              <span className="ticker-item" key={`${item}-${i}`}>{item}<span className="ticker-star">✳</span></span>
            ))}
          </div>
        </div>
      </div>

      <header className="header">
        <a className="brand" href="#home" aria-label="Artistpuram home">
          <span className="brand-mark"><Sparkles size={22} strokeWidth={1.7} /></span>
          <span className="brand-word">artistpuram<span className="brand-period">.</span><small>ART • HANDMADE • HEART</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#creations" onClick={closeMenu}>Our art</a>
          <a href="#note" onClick={closeMenu}>A note from Artist</a>
          <a href="#contact" onClick={closeMenu} aria-label="User profile"><UserRound size={18} /></a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Booking<ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> A little corner of creativity</div>
            <h1>Made by hand.<br /><em>Kept by heart.</em></h1>
            <p className="hero-description">A home for thoughtful handmade art, one-of-a-kind gifts, and little things that make ordinary days feel special.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#creations">Explore our art <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#note">Meet the artist <ChevronRight size={16} /></a>
            </div>
            <div className="hero-footnote"><span className="tiny-heart">♥</span> Made slowly, with lots of love.</div>
          </div>
          <div className="hero-art">
            <div className="hero-image-frame">
              <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=90" alt="Artist's desk with art supplies and creative work" />
            </div>
            <div className="hero-sticker"><span>ART IS</span><strong>JOY</strong><span>IN THE MAKING ✳</span></div>
            <div className="hero-caption"><span className="caption-line" /> Little pieces of imagination, made real.</div>
          </div>
          <div className="hero-scribble" aria-hidden="true">✳</div>
        </section>

        <section className="intro-strip">
          <span>HANDMADE WITH INTENTION</span><span className="strip-flower">✿</span>
          <span>CREATED WITH LOVE</span><span className="strip-flower">✿</span>
          <span>MADE TO MAKE YOU SMILE</span>
        </section>

        <section className="creations section-pad" id="creations">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> A peek into our world</div>
              <h2>Little things.<br /><em>Lots of meaning.</em></h2>
            </div>
            <p className="section-intro">From playful textures to traditional details, every art form has its own kind of magic. Here are a few things we love making.</p>
          </div>

          <div className="art-grid">
            {artwork.map((item, index) => (
              <article className={`art-card art-card-${index + 1}`} key={item.name}>
                <div className="art-image-wrap">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="art-number">0{index + 1}</span>
                  <span className="art-heart"><Heart size={17} /></span>
                </div>
                <div className="art-card-info">
                  <div><h3>{item.name}</h3><p>{item.tag}</p></div>
                  <span className="art-arrow"><ArrowUpRight size={19} /></span>
                </div>
              </article>
            ))}
          </div>
          <p className="sample-note">A small preview of the kinds of art we make. Photos and collections can be replaced with the artist's own work later.</p>
        </section>

        <section className="artist-note section-pad" id="note">
          <div className="note-decoration" aria-hidden="true">“</div>
          <div className="note-content">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> A note from the artist</div>
            <h2>Every piece has<br />a <em>little piece of me.</em></h2>
            <p>Artistpuram is a space for creating with curiosity, celebrating handmade things, and turning simple ideas into something meaningful. Thank you for being here and supporting art made with heart.</p>
            <div className="signature">With love, <span>the Artistpuram artist</span> <span className="signature-heart">♥</span></div>
          </div>
          <div className="note-side">
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85" alt="Paints and art supplies on a creative work table" loading="lazy" />
            <span className="note-side-caption">A little colour goes a long way.</span>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-top">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> Have an idea in mind?</div>
              <h2>Let's make<br /><em>something lovely.</em></h2>
            </div>
            <p>Have a custom idea, a question about bookings, or just want to say hello? We'd love to hear from you.</p>
          </div>
          <div className="contact-cards">
            <a className="contact-card" href="mailto:hello@artistpuram.com">
              <span className="contact-icon"><Mail size={21} /></span>
              <span><small>WRITE TO US</small><strong>hello@artistpuram.com</strong></span>
              <ArrowUpRight className="contact-arrow" size={19} />
            </a>
            <button className="contact-card contact-button" onClick={copyEmail}>
              <span className="contact-icon"><Phone size={21} /></span>
              <span><small>OWNER CONTACT</small><strong>{emailCopied ? 'Email copied!' : 'Contact details coming soon'}</strong></span>
              <ArrowUpRight className="contact-arrow" size={19} />
            </button>
            <a className="contact-card" href="#footer">
              <span className="contact-icon"><Instagram size={21} /></span>
              <span><small>FOLLOW THE JOURNEY</small><strong>Instagram details coming soon</strong></span>
              <ArrowUpRight className="contact-arrow" size={19} />
            </a>
          </div>
          <p className="contact-disclaimer">Contact information above is placeholder content for this first design and should be replaced with the owner's real details before publishing.</p>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="footer-main">
          <a className="brand brand-footer" href="#home">
            <span className="brand-mark"><Sparkles size={22} strokeWidth={1.7} /></span>
            <span className="brand-word">artistpuram<span className="brand-period">.</span><small>ART • HANDMADE • HEART</small></span>
          </a>
          <p>A little more art.<br />A little more heart.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy policy</a>
            <a href="#contact">Contact us</a>
            <a href="#help">Help</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Artistpuram. Made with <span className="footer-heart">♥</span>.</span>
          <span>Every creation tells a story.</span>
        </div>
        <div className="placeholder-footnotes" aria-label="Pages to complete later">
          <span id="privacy">Privacy policy page to be added</span>
          <span id="help">Help page to be added</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
