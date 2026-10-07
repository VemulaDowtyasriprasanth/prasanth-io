import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, ArrowUp, Github, Linkedin, Mail, Menu, X, MapPin, Pause, Play, Download } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillSection from './components/SkillSection';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import profileImage from './assets/profile_pic.png';
import { projects, portfolioResources } from './data/projects';

const navigation = [['projects', 'Projects'], ['experience', 'Experience'], ['skills', 'Skills'], ['achievements', 'Education & certs'], ['about', 'About']] as const;
const projectFilters = ['All projects', 'Sandboxes & agents', 'Products', 'AI & agents', 'Data & automation', 'Machine learning'] as const;
type ProjectFilter = typeof projectFilters[number];
const projectCategories: Record<Exclude<ProjectFilter, 'All projects'>, number[]> = {
  'Sandboxes & agents': [13, 14, 15, 16, 17],
  'Products': [18, 19, 23],
  'AI & agents': [3, 7, 8, 12, 13, 14, 15, 16, 17, 19],
  'Data & automation': [1, 2, 9, 10, 11, 18, 20, 22, 23],
  'Machine learning': [4, 5, 6, 21],
};
const githubUrl = 'https://github.com/VemulaDowtyasriprasanth';
const linkedinUrl = 'https://linkedin.com/in/dsp1729/';
const resumeUrl = 'https://docs.google.com/document/d/1bdA8ADEX0t8WCvSZFWAXE_JOG2tt8zI8/edit?usp=sharing&ouid=117040235381669175039&rtpof=true&sd=true';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('All projects');
  const [motionPaused, setMotionPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const motionEnabled = !motionPaused && !reducedMotion;
  const visibleProjects = projectFilter === 'All projects' ? projects : projects.filter(project => projectCategories[projectFilter].includes(project.id));

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeMenu);
    return () => document.removeEventListener('keydown', closeMenu);
  }, [isMenuOpen]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current?.style.setProperty('--scroll-progress', String(distance > 0 ? Math.min(window.scrollY / distance, 1) : 0));
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    document.addEventListener('toggle', schedule, true);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('toggle', schedule, true);
    };
  }, [projectFilter]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-18% 0px -58% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!motionEnabled || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.remove('reveal-ready'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.03, rootMargin: '0px 0px 40px 0px' });
    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${index % 3 * 65}ms`);
      element.classList.add('reveal-ready');
      if (element.getBoundingClientRect().top < window.innerHeight * 0.95) element.classList.add('is-visible');
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach(element => element.classList.remove('reveal-ready'));
    };
  }, [motionEnabled, projectFilter]);

  return (
    <div className={`portfolio ${motionEnabled ? 'motion-on' : 'motion-off'}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label="Prasanth Vemula — home">
            <span className="brand-symbol">pv<span>.</span></span>
            <span className="brand-name">Prasanth Vemula<small>ENGINEER & ARCHITECT</small></span>
          </a>
          <div className="desktop-navigation">
            {navigation.map(([id, label]) => <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined}>{label}</a>)}
          </div>
          <div className="nav-actions">
            <button className="motion-control icon-button" onClick={() => setMotionPaused(!motionPaused)} aria-label={reducedMotion ? 'Animations disabled by your system preference' : motionPaused ? 'Enable animations' : 'Pause animations'} aria-pressed={motionPaused || reducedMotion} disabled={reducedMotion} title={reducedMotion ? 'Reduced motion is enabled on your device' : motionPaused ? 'Enable animations' : 'Pause animations'}>
              {motionEnabled ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
            <button className="menu-toggle icon-button" ref={menuButtonRef} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {isMenuOpen && <div id="mobile-navigation" className="mobile-navigation">
          {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact<ArrowUpRight size={16} /></a>
        </div>}
      </nav>

      <main id="main-content">
        <header id="home" className="hero section-shell">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow hero-enter"><span className="status-dot" /> Enterprise AI Architect</p>
            <h1 className="hero-title hero-enter">AI that works.<br /><span>In the real world.</span></h1>
            <p className="hero-description hero-enter">I’m Prasanth. I build intelligent systems that connect complex data, thoughtful engineering, and real business needs.</p>
            <div className="hero-actions hero-enter">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={19} /></a>
              <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noopener noreferrer">View résumé <Download size={17} /></a>
            </div>
            <div className="hero-meta hero-enter"><span><MapPin size={14} /> Dallas, Texas</span><i className="meta-divider" /><span>Enterprise AI · Cloud · Agentic systems</span></div>
            <div className="hero-socials hero-enter">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Prasanth on GitHub"><Github size={19} /></a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Prasanth on LinkedIn"><Linkedin size={19} /></a>
              <a href="mailto:prasanthvemula1729@gmail.com" aria-label="Email Prasanth"><Mail size={19} /></a>
              <span>Good things start with a conversation.</span>
            </div>
          </div>
          <div className="portrait-stage hero-enter">
            <div className="portrait-orbit" aria-hidden="true"><span /></div>
            <figure className="portrait-frame">
              <div className="portrait-label">THE PERSON BEHIND THE CODE <ArrowUpRight size={15} /></div>
              <div className="portrait-image"><img src={profileImage} alt="Prasanth Vemula" /></div>
              <figcaption><div><strong>Prasanth Vemula</strong><span>Enterprise AI Architect</span></div><span className="portrait-mark">PV / 01</span></figcaption>
            </figure>
            <div className="floating-note"><span className="status-dot" /><div><small>Currently building at</small><strong>Toyota via NTT Data</strong></div></div>
            <div className="portrait-coordinate">IDEA → INTELLIGENCE → IMPACT</div>
          </div>
          <div className="hero-bottom"><a className="scroll-cue" href="#projects"><ArrowDown size={16} /> SCROLL TO EXPLORE</a><span>Engineering with purpose. Building with curiosity.</span></div>
        </header>

        <div className="expertise-strip" aria-label="Core technologies"><div className="section-shell"><span>Python</span><span>LangGraph</span><span>AWS</span><span>Azure</span><span>OpenSearch</span><span>React</span></div></div>

        <section id="projects" className="section-shell content-section">
          <div className="section-heading" data-reveal><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Ideas, built.</h2></div><p>From agent sandboxes to predictive systems.<br />Projects, experiments, and products brought to life.</p></div>
          <div className="project-toolbar"><div className="project-filters" aria-label="Filter projects">{projectFilters.map(filter => <button key={filter} className={projectFilter === filter ? 'selected' : ''} aria-pressed={projectFilter === filter} onClick={() => setProjectFilter(filter)}>{filter}</button>)}</div><span className="project-count" role="status" aria-live="polite">{String(visibleProjects.length).padStart(2, '0')} projects</span></div>
          <div className="projects-grid">{visibleProjects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
          <div className="project-resources"><span>More of my work</span>{portfolioResources.map(resource => <a key={resource.label} href={resource.url} target="_blank" rel="noopener noreferrer">{resource.label} <ArrowUpRight size={16} /></a>)}</div>
        </section>

        <section id="experience" className="content-section experience-section"><div className="section-shell">
          <div className="section-heading" data-reveal><div><p className="eyebrow">02 / THE JOURNEY</p><h2>Experience that builds.</h2></div><p>Enterprise teams. Ambitious startups.<br />Products built from the ground up.</p></div>
          <Experience />
        </div></section>

        <section id="skills" className="section-shell content-section">
          <div className="section-heading" data-reveal><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>The tools behind the work.</h2></div><p>A practical stack for turning<br />complex challenges into working systems.</p></div>
          <SkillSection />
        </section>

        <section id="achievements" className="content-section education-section"><div className="section-shell">
          <div className="section-heading" data-reveal><div><p className="eyebrow">04 / FOUNDATIONS</p><h2>Always learning.</h2></div><p>Education, certifications, and achievements<br />that shape how I think and build.</p></div>
          <Certifications />
          <Achievements />
        </div></section>

        <section id="about" className="section-shell content-section about-section">
          <div className="about-heading" data-reveal><p className="eyebrow">05 / BEYOND THE CODE</p><h2>Curiosity is<br />the starting point.</h2><div className="about-signature">Prasanth<span>Engineer. Architect. Builder.</span></div></div>
          <div className="about-copy" data-reveal>
            <p>With over 6 years of expertise in Data Science and AI, I specialize in leveraging Large Language Models (LLMs) like GPT-4 and advanced cloud technologies to create innovative solutions that address real-world challenges. My work spans developing NLP-powered systems, predictive analytics, and scalable applications.</p>
            <p>Key projects include building an <strong>HR Resume Screening Assistant</strong> for automated candidate analysis, a <strong>Custom ChatGPT system</strong> using LangChain for enhanced querying, and a <strong>Wildfire Prediction System</strong> leveraging machine learning for environmental insights.</p>
            <p>I am passionate about advancing AI research and have successfully deployed systems like the <strong>Customer Care Call Summary</strong> for automated speech-to-text summarization and the <strong>Invoice Extraction Chatbot</strong> to streamline document processing. Each project reflects my dedication to creating scalable, robust systems that drive measurable impact.</p>
          </div>
        </section>

        <section id="contact" className="contact-section"><div className="section-shell contact-inner" data-reveal>
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2>Let’s build<br /><span>something meaningful.</span></h2>
          <a className="contact-email" href="mailto:prasanthvemula1729@gmail.com">prasanthvemula1729@gmail.com <ArrowUpRight /></a>
          <div className="contact-links"><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} /></a><a href="#projects">View projects <ArrowRight size={16} /></a></div>
        </div></section>
      </main>
      <footer className="site-footer section-shell"><span>© {new Date().getFullYear()} Prasanth Vemula</span><span>Based in Dallas, Texas</span><a href="#home">Back to top <ArrowUp size={15} /></a></footer>
    </div>
  );
}

export default App;
