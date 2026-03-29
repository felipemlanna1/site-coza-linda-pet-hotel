import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Clock, Star, InstagramLogo,
  ArrowRight, Heart, House, PawPrint, Shield,
  SunHorizon, FirstAid, Camera
} from '@phosphor-icons/react'
import './index.css'

const WHATSAPP = 'https://wa.me/5548920021689?text=Ola! Gostaria de saber sobre hospedagem para meu pet na Coza Linda.'
const PHONE = '(48) 92002-1689'
const ADDRESS = 'Lagoa da Conceicao — Florianopolis/SC'
const INSTAGRAM = 'https://instagram.com/cozalindapethostel'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [menuOpen])

  const links = [
    { label: 'Sobre', href: '#sobre' }, { label: 'Servicos', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' }, { label: 'Galeria', href: '#galeria' },
    { label: 'Petsitter', href: '#petsitter' }, { label: 'Avaliacoes', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand"><img src="./images/logo-oficial.png" alt="Coza Linda" /><span className="navbar-brand-text">Coza Linda</span></a>
        <div className="navbar-links">
          {links.map(l => <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>)}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-cta"><WhatsappLogo size={14} weight="fill" />Reservar</a>
        </div>
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}><WhatsappLogo size={18} weight="fill" />Reservar Hospedagem</a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"><img src="./images/hero-pets.jpg" alt="Pets felizes na Coza Linda" /></div>
      <div className="hero-content">
        <Reveal><div className="hero-badge"><span className="hero-badge-dot" />Pet Hotel Familiar em Floripa</div></Reveal>
        <Reveal delay={0.1}><h1>Seu pet tratado<br />como <em>familia</em></h1></Reveal>
        <Reveal delay={0.2}><p className="hero-subtitle">Hospedagem familiar onde seu pet vira parte da casa. Cuidado profissional de zootecnista, muito amor e atencao individualizada na Lagoa da Conceicao.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" />Reservar Hospedagem</a>
            <a href="#servicos" className="btn-outline">Nossos Servicos<ArrowRight size={16} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="hero-info">
            <div className="hero-info-item"><MapPin size={16} weight="duotone" /><span>Lagoa da Conceicao</span></div>
            <div className="hero-info-item"><Star size={16} weight="fill" /><span>4.9 — 62 avaliacoes</span></div>
            <div className="hero-info-item"><PawPrint size={16} weight="duotone" /><span>Zootecnista responsavel</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="history" id="sobre">
      <div className="container">
        <div className="history-grid">
          <Reveal><div className="history-image"><img src="./images/hospedagem.jpg" alt="Hospedagem familiar" /></div></Reveal>
          <div>
            <Reveal><div className="section-label">Nossa Historia</div><h2 className="section-title">Um lar de verdade<br />para seu <em>melhor amigo</em></h2></Reveal>
            <Reveal delay={0.15}><p className="history-text">A Coza Linda nasceu do amor pelos animais. Somos um pet hostel familiar onde os pets sao acolhidos em nossa propria casa e se tornam parte da familia. Com cuidado profissional de zootecnista, garantimos que seu companheiro tenha a melhor experiencia possivel.</p></Reveal>
            <Reveal delay={0.25}><p className="history-text" style={{ marginTop: 16 }}>Alem da hospedagem em nosso lar, oferecemos servico de petsitter — cuidamos do seu pet na sua propria casa, mantendo a rotina e o conforto que ele ja conhece. Tudo com muito carinho e responsabilidade.</p></Reveal>
            <Reveal delay={0.35}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}><WhatsappLogo size={18} weight="fill" />Conhecer o Espaco</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const servicos = [
    { title: 'Hospedagem Familiar', desc: 'Seu pet hospedado em nossa casa, como parte da familia. Ambiente seguro, aconchegante e com supervisao 24h.', image: './images/hospedagem.jpg' },
    { title: 'Petsitter a Domicilio', desc: 'Cuidamos do seu pet na sua casa. Alimentacao, passeios, brincadeiras e muito carinho na rotina do dia a dia.', image: './images/cuidado.jpg' },
    { title: 'Passeios e Recreacao', desc: 'Passeios diarios ao ar livre, brincadeiras e socializacao. Seu pet gasta energia e se diverte enquanto voce viaja.', image: './images/passeio.jpg' },
    { title: 'Cuidados Especiais', desc: 'Administracao de medicamentos, dietas especiais e necessidades individuais. Cuidado profissional de zootecnista.', image: './images/cuidado.jpg' },
    { title: 'Day Care', desc: 'Precisa sair por algumas horas? Deixe seu pet conosco para um dia de diversao, socializacao e cuidado.', image: './images/hero-pets.jpg' },
    { title: 'Relatorios com Fotos', desc: 'Receba atualizacoes diarias com fotos e videos do seu pet. Fique tranquilo sabendo que ele esta bem e feliz.', image: './images/passeio.jpg' },
  ]
  return (
    <section className="cardapio" id="servicos">
      <div className="container">
        <Reveal><div className="section-label">Servicos</div><h2 className="section-title">Tudo que seu pet<br /><em>precisa</em></h2></Reveal>
        <div className="cardapio-grid">
          {servicos.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cardapio-card">
                <div className="cardapio-card-image"><img src={s.image} alt={s.title} /></div>
                <div className="cardapio-card-content">
                  <div className="cardapio-card-category">{s.title}</div>
                  <p className="cardapio-card-desc">{s.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Differentials() {
  const features = [
    { icon: House, title: 'Ambiente Familiar', desc: 'Nada de canis ou gaiolas. Seu pet fica livre em nossa casa, com sofas, camas e muito espaco.' },
    { icon: FirstAid, title: 'Zootecnista Responsavel', desc: 'Profissional formada em Zootecnia. Conhecimento tecnico para cuidar com seguranca e competencia.' },
    { icon: Heart, title: 'Atencao Individual', desc: 'Cada pet e unico. Respeitamos a personalidade, rotina e necessidades especiais de cada animalzinho.' },
    { icon: Camera, title: 'Relatorios Diarios', desc: 'Fotos e videos do seu pet todos os dias. Voce acompanha tudo em tempo real pelo WhatsApp.' },
  ]
  return (
    <section className="experience" id="diferenciais">
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Diferenciais</div><h2 className="section-title">Por que confiar na<br /><em>Coza Linda</em></h2></Reveal>
            <div className="experience-features">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="experience-feature"><div className="experience-feature-icon"><f.icon size={22} weight="duotone" /></div><div><h4>{f.title}</h4><p>{f.desc}</p></div></div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/cuidado.jpg" alt="Cuidado com os pets" />
              <div className="experience-image-badge"><span className="number">4.9</span><span className="label">Nota no Google</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    { src: './images/hero-pets.jpg', alt: 'Pets felizes' },
    { src: './images/hospedagem.jpg', alt: 'Hospedagem' },
    { src: './images/passeio.jpg', alt: 'Passeio' },
    { src: './images/cuidado.jpg', alt: 'Cuidado' },
    { src: './images/hero-pets.jpg', alt: 'Diversao' },
  ]
  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <Reveal><div className="section-label">Galeria</div><h2 className="section-title">Momentos de <em>felicidade</em></h2></Reveal>
        <div className="gallery-grid">
          {images.map((img, i) => <Reveal key={i} delay={i * 0.08}><div className="gallery-item"><img src={img.src} alt={img.alt} /></div></Reveal>)}
        </div>
      </div>
    </section>
  )
}

function Petsitter() {
  return (
    <section className="experience" id="petsitter" style={{ background: 'var(--earth)' }}>
      <div className="container">
        <div className="experience-grid">
          <Reveal delay={0.1}>
            <div className="experience-image">
              <img src="./images/passeio.jpg" alt="Petsitter a domicilio" />
              <div className="experience-image-badge" style={{ background: 'var(--orange)' }}><span className="number">24h</span><span className="label">Supervisao total</span></div>
            </div>
          </Reveal>
          <div>
            <Reveal><div className="section-label">Petsitter</div><h2 className="section-title">Cuidado na sua casa<br />com todo <em>carinho</em></h2></Reveal>
            <Reveal delay={0.1}><p className="history-text">Se seu pet se sente mais confortavel em casa, vamos ate voce! Nosso servico de petsitter inclui alimentacao, passeios, brincadeiras e administracao de medicamentos — tudo na rotina que seu pet ja conhece.</p></Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                {['Alimentacao', 'Passeios', 'Medicamentos', 'Brincadeiras', 'Relatorios'].map(v => (
                  <span key={v} style={{ padding: '8px 16px', border: '1px solid rgba(234, 145, 58, 0.25)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', fontWeight: 600 }}>{v}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}><WhatsappLogo size={18} weight="fill" />Solicitar Petsitter</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    { text: 'Minha cachorrinha ficou super bem cuidada! A Coza Linda e realmente um lar para os pets. Recebi fotos todos os dias e fiquei muito tranquila durante a viagem. Super recomendo!', author: 'Amanda S.', rating: 5 },
    { text: 'Excelente! O cuidado com meu dog foi incrivel. Ele voltou feliz e saudavel. A zootecnista e super atenciosa e competente. Ja marquei a proxima hospedagem.', author: 'Rafael M.', rating: 5 },
    { text: 'Melhor pet hotel de Floripa. Ambiente familiar, carinho de verdade e profissionalismo. Meu pet ama ficar na Coza Linda. Nota 10 em tudo!', author: 'Camila L.', rating: 5 },
  ]
  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <div className="reviews-header">
          <div><Reveal><div className="section-label">Avaliacoes</div><h2 className="section-title">O que dizem os <em>tutores</em></h2></Reveal></div>
          <Reveal delay={0.1}>
            <div className="reviews-score">
              <div className="reviews-score-number">4.9</div>
              <div className="reviews-score-meta">
                <div className="reviews-stars">{[...Array(5)].map((_, i) => <Star key={i} size={18} weight={i < 5 ? 'fill' : 'duotone'} />)}</div>
                <div className="reviews-count">62 avaliacoes no Google</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="review-card">
                <div className="review-card-quote">&ldquo;</div>
                <div className="review-card-stars">{[...Array(r.rating)].map((_, j) => <Star key={j} size={14} weight="fill" />)}</div>
                <p className="review-card-text">{r.text}</p>
                <div className="review-card-author">{r.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <h2>Seu pet merece o melhor<br /><em>cuidado</em></h2>
          <p>Reserve a hospedagem ou solicite um petsitter. Seu pet vai ser tratado como familia na Coza Linda.</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" />Reservar pelo WhatsApp</a>
            <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" />Ligar: {PHONE}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: MapPin, title: 'Localizacao', text: ADDRESS },
    { icon: Phone, title: 'Telefone', text: PHONE },
    { icon: PawPrint, title: 'Servicos', text: 'Hospedagem, Petsitter, Day Care' },
    { icon: Shield, title: 'Profissional', text: 'Zootecnista responsavel' },
  ]
  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal><div className="section-label">Contato</div><h2 className="section-title">Fale <em>conosco</em></h2></Reveal>
        <div className="contact-grid">
          <div className="contact-info">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="contact-item"><div className="contact-item-icon"><item.icon size={20} weight="duotone" /></div><div><h4>{item.title}</h4><p>{item.text}</p></div></div>
              </Reveal>
            ))}
            <Reveal delay={0.4}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16 }}><WhatsappLogo size={18} weight="fill" />Reservar Hospedagem</a></Reveal>
          </div>
          <Reveal delay={0.2}><div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.0!2d-48.4650!3d-27.5980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzUyLjgiUyA0OMKwMjcnNTQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1" title="Coza Linda Pet Hotel" loading="lazy" /></div></Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div><div className="footer-brand-text">Coza Linda</div><p className="footer-brand-desc">Pet hotel familiar em Florianopolis. Hospedagem e petsitter com cuidado de zootecnista. Seu pet tratado como familia.</p></div>
          <div><div className="footer-title">Navegacao</div><ul className="footer-links"><li><a href="#sobre">Sobre</a></li><li><a href="#servicos">Servicos</a></li><li><a href="#diferenciais">Diferenciais</a></li><li><a href="#galeria">Galeria</a></li><li><a href="#avaliacoes">Avaliacoes</a></li><li><a href="#contato">Contato</a></li></ul></div>
          <div><div className="footer-title">Contato</div><ul className="footer-links"><li><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li><li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li><li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@cozalindapethostel</a></li><li><a>{ADDRESS}</a></li></ul></div>
        </div>
        <div className="footer-bottom"><span>&copy; 2026 Coza Linda Pet Hotel</span><div className="footer-social"><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"><InstagramLogo size={20} weight="regular" /></a><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={20} weight="regular" /></a></div></div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() { return <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float"><WhatsappLogo size={28} weight="fill" /></a> }

export default function App() {
  return (<><Navbar /><main><Hero /><About /><Services /><Differentials /><Gallery /><Petsitter /><Reviews /><CtaSection /><Contact /></main><Footer /><WhatsAppFloat /></>)
}
