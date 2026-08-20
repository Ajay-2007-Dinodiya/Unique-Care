import React, { useState, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, MessageSquarePlus, Quote, CheckCircle2, ShieldCheck, Sparkles, Building2, X, Send } from 'lucide-react'

export interface TestimonialItem {
  id: string
  name: string
  role: string
  company: string
  batch: 'Uniques 1.0' | 'Uniques 2.0' | 'Industry Mentor'
  badge: string
  badgeColor?: string
  quote: string
  extendedQuote?: string
  rating: number
  avatar?: string
  verified: boolean
}

const initialTestimonials: TestimonialItem[] = [
  // ── Uniques 1.0 (Founding Cohort) ──────────────────────────────
  {
    id: '1',
    name: 'Ronit JaiPrakash',
    role: 'Application Developer',
    company: 'Caelius Consultancy',
    batch: 'Uniques 1.0',
    badge: 'MERN Stack Expert',
    badgeColor: '#dc2626',
    quote: '"The Uniques Community provided me with the skills and connections to launch my career as a Full Stack Developer. The mentorship I received was invaluable in helping me secure my role at Caelius Consultancy."',
    extendedQuote: 'From building real-world complaint portals to managing microservices, the exposure was indistinguishable from tier-1 software companies.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },
  {
    id: '2',
    name: 'Naveen Jaiswal',
    role: 'Software Developer',
    company: 'Thor Solutions',
    batch: 'Uniques 1.0',
    badge: 'Product Development',
    badgeColor: '#ea580c',
    quote: '"Through the practical projects and industry-focused training at The Uniques, I developed the technical expertise needed to excel in my role developing product customization platforms."',
    extendedQuote: 'Working with live hardware telemetry taught me edge-case fault tolerance that now powers our client deployments daily.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },
  {
    id: '3',
    name: 'Parveen Jaiswal',
    role: 'Web Developer',
    company: 'SpacePepper Studios',
    batch: 'Uniques 1.0',
    badge: 'MCD Certified',
    badgeColor: '#b91c1c',
    quote: '"As an MCD Level-1 certified developer, I can attribute much of my success to the guidance and opportunities provided by The Uniques Community. They helped transform my passion into expertise."',
    extendedQuote: 'The peer code reviews and sprint retrospectives gave me the confidence to lead architectural design reviews from day one.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },
  {
    id: '4',
    name: 'Harshit Srivastava',
    role: 'Full Stack Lead',
    company: 'Cognizant Technology',
    batch: 'Uniques 1.0',
    badge: 'Microservices Lead',
    badgeColor: '#e11d48',
    quote: '"The foundation laid down during Uniques 1.0 project sprints gave me an unfair advantage in large-scale system deployments and agile engineering sprints."',
    extendedQuote: 'We designed real-time fault tracking pipelines that prepared me to lead production releases for international enterprise clients.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },
  {
    id: '5',
    name: 'Divyanshu Sharma',
    role: 'Frontend Architect',
    company: 'Innovaccer Labs',
    batch: 'Uniques 1.0',
    badge: 'UI/UX Engineer',
    badgeColor: '#c026d3',
    quote: '"Learning component hierarchies, performance profiling, and design tokens in The Uniques shaped how I build consumer-grade healthcare dashboards today."',
    extendedQuote: 'The culture of uncompromising visual excellence and rapid iteration was instilled right here at SVIET campus.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },

  // ── Industry Mentors & Leaders ──────────────────────────────────
  {
    id: '11',
    name: 'Dr. Rajeshwar Sen',
    role: 'Principal Enterprise Architect',
    company: 'Global Networks Corp',
    batch: 'Industry Mentor',
    badge: 'Enterprise Architect',
    badgeColor: '#0284c7',
    quote: '"Mentoring students from The Uniques Community has been truly refreshing. Their problem-solving agility, git hygiene, and systems architecture skills rival engineers with 2+ years industry experience."',
    extendedQuote: 'Unique Care reflects industrial-grade enterprise SLA management combined with intuitive human-centric UI design.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },
  {
    id: '12',
    name: 'Vikram Aditya Sharma',
    role: 'VP of Engineering',
    company: 'TechVentures Labs',
    batch: 'Industry Mentor',
    badge: 'VP of Engineering',
    badgeColor: '#059669',
    quote: '"The hands-on lab infrastructure and live ticketing culture in Unique Care inculcates real engineering discipline early on. SVIET students stand out in every hackathon and recruitment drive."',
    extendedQuote: 'Seeing students build automated QR workflows and telemetry dashboards shows the incredible potential of student-led innovation.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },
  {
    id: '13',
    name: 'Shalini Mukherjee',
    role: 'Director of Cloud Infrastructure',
    company: 'AWS Partner Solutions',
    batch: 'Industry Mentor',
    badge: 'Cloud Director',
    badgeColor: '#d97706',
    quote: '"The technical maturity with which The Uniques builds and maintains campus cloud infrastructure is exemplary. They produce engineers who hit the ground running."',
    extendedQuote: 'Their focus on SLA triage, uptime tracking, and real-time observability is textbook cloud excellence.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },
  {
    id: '14',
    name: 'Prof. Arvind Kulkarni',
    role: 'Head of Innovation & Incubation',
    company: 'National Tech Consortium',
    batch: 'Industry Mentor',
    badge: 'Incubation Mentor',
    badgeColor: '#7c3aed',
    quote: '"The Uniques is not just a student group; it is an incubation powerhouse. The students consistently convert lab pain points into scalable software solutions."',
    extendedQuote: 'I have seen multiple patent drafts and startup MVPs sprout from their collaborative lab sessions.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },
  {
    id: '15',
    name: 'Rohit Batra',
    role: 'Senior Engineering Manager',
    company: 'Uber Technologies',
    batch: 'Industry Mentor',
    badge: 'Tech Evangelist',
    badgeColor: '#dc2626',
    quote: '"I was genuinely blown away during code reviews by how clean their microservice boundaries and UI states were structured. Top-tier engineering talent."',
    extendedQuote: 'Any tech company would be fortunate to hire students groomed through The Uniques project tracks.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
    verified: true,
  },
]

export function CommunityTestimonials() {
  const [filter, setFilter] = useState<'All' | 'Uniques 1.0' | 'Industry Mentor'>('All')
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(initialTestimonials)
  const [modalOpen, setModalOpen] = useState(false)
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null)
  
  // Form State
  const [newName, setNewName] = useState('')
  const [newRole, setNewRole] = useState('')
  const [newCompany, setNewCompany] = useState('')
  const [newBatch, setNewBatch] = useState<'Uniques 1.0' | 'Industry Mentor'>('Uniques 1.0')
  const [newBadge, setNewBadge] = useState('')
  const [newQuote, setNewQuote] = useState('')
  const [newRating, setNewRating] = useState(5)
  const [submittedToast, setSubmittedToast] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)

  const filtered = testimonials.filter(item => {
    if (filter === 'All') return true
    return item.batch === filter
  })

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName.trim() || !newQuote.trim()) return

    const newItem: TestimonialItem = {
      id: Date.now().toString(),
      name: newName,
      role: newRole || 'Community Member',
      company: newCompany || 'SVIET Campus',
      batch: newBatch,
      badge: newBadge || (newBatch === 'Industry Mentor' ? 'Industry Mentor' : 'Tech Enthusiast'),
      quote: `"${newQuote}"`,
      rating: newRating,
      verified: true,
      badgeColor: newBatch === 'Industry Mentor' ? '#0284c7' : newBatch === 'Uniques 1.0' ? '#dc2626' : '#9333ea',
    }

    setTestimonials(prev => [newItem, ...prev])
    setSubmittedToast(true)
    setTimeout(() => {
      setSubmittedToast(false)
      setModalOpen(false)
      setNewName('')
      setNewRole('')
      setNewCompany('')
      setNewBadge('')
      setNewQuote('')
    }, 1800)
  }

  return (
    <section id="community-testimonials" className="testimonials-section reveal-on-scroll">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header-flex">
          <div>
            <div className="testimonials-eyebrow">
              <Sparkles size={14} className="sparkle-icon" />
              <span>COMMUNITY VOICES &amp; ALUMNI SPOTLIGHT</span>
            </div>
            <h2>
              Testimonials from <span className="text-red-highlight">Our Students</span> &amp; Mentors
            </h2>
            <p className="testimonials-subtitle">
              Hear from our alumni and industry leaders who have successfully launched their careers and shaped the culture through The Uniques Community.
            </p>
          </div>

          <div className="testimonials-header-actions">
            {/* Horizontal Scroll Controls */}
            <div className="testimonial-scroll-btns">
              <button
                type="button"
                className="scroll-arrow-btn"
                onClick={() => scroll('left')}
                title="Scroll Left"
                aria-label="Previous Testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="scroll-arrow-btn"
                onClick={() => scroll('right')}
                title="Scroll Right"
                aria-label="Next Testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Add Review Button */}
            <button
              type="button"
              className="btn-add-review"
              onClick={() => setModalOpen(true)}
            >
              <MessageSquarePlus size={16} />
              <span>Add Your Comment</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="testimonials-filter-bar">
          {(['All', 'Uniques 1.0', 'Industry Mentor'] as const).map(tab => (
            <button
              key={tab}
              type="button"
              className={`filter-tab-pill ${filter === tab ? 'active' : ''}`}
              onClick={() => setFilter(tab)}
            >
              {tab === 'All' ? 'All Reviews' : tab === 'Industry Mentor' ? 'Industry Mentors' : tab}
              <span className="filter-count-badge">
                {tab === 'All' ? testimonials.length : testimonials.filter(t => t.batch === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Horizontal Testimonials Carousel / Grid */}
        <div className="testimonials-scroll-viewport" ref={scrollRef}>
          {filtered.map(item => {
            const isHovered = hoveredCardId === item.id

            return (
              <div
                key={item.id}
                className={`testimonial-card ${isHovered ? 'card-hovered' : ''}`}
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                {/* Top Corner Pill Badge */}
                <div className="testimonial-top-row">
                  <div
                    className="testimonial-batch-pill"
                    style={{
                      backgroundColor: item.badgeColor ? `${item.badgeColor}18` : 'rgba(220, 38, 38, 0.12)',
                      borderColor: item.badgeColor || 'var(--red)',
                      color: item.badgeColor || 'var(--red)'
                    }}
                  >
                    {item.badge}
                  </div>
                  <div className="testimonial-batch-tag">
                    {item.batch}
                  </div>
                </div>

                {/* Star Ratings */}
                <div className="testimonial-stars-row">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="star-filled"
                      fill="#f59e0b"
                      color="#f59e0b"
                    />
                  ))}
                  <span className="rating-score">5.0</span>
                </div>

                {/* Quote with Floating Decorative Quote Icon */}
                <div className="testimonial-quote-wrap">
                  <Quote size={24} className="testimonial-quote-icon" />
                  <p className="testimonial-quote-text">{item.quote}</p>
                  
                  {/* Extended details that expand smoothly on hover */}
                  <div className={`testimonial-extended-content ${isHovered ? 'extended-visible' : ''}`}>
                    {item.extendedQuote && (
                      <p className="testimonial-extended-text">
                        {item.extendedQuote}
                      </p>
                    )}
                    <div className="testimonial-verified-badge">
                      <ShieldCheck size={14} color="var(--red-bright)" />
                      <span>Verified The Uniques Alumni Record</span>
                    </div>
                  </div>
                </div>

                {/* Author Info */}
                <div className="testimonial-author-row">
                  <div className="testimonial-avatar-wrap">
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="testimonial-avatar-img"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="testimonial-avatar-placeholder">
                        {item.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    {item.verified && (
                      <span className="testimonial-verified-dot" title="Verified Member">
                        <CheckCircle2 size={12} fill="#22c55e" color="#fff" />
                      </span>
                    )}
                  </div>

                  <div className="testimonial-author-details">
                    <h4 className="testimonial-author-name">{item.name}</h4>
                    <div className="testimonial-author-role">{item.role}</div>
                    <div className="testimonial-author-company">
                      <Building2 size={12} />
                      <span>{item.company}</span>
                    </div>
                  </div>
                </div>

                {/* Subtle Bottom Accent Glow on hover */}
                <div className="testimonial-hover-glow" />
              </div>
            )
          })}
        </div>

        {/* Bottom Banner with Fast Call-To-Action */}
        <div className="testimonials-bottom-cta">
          <div className="tb-left">
            <Sparkles size={20} color="var(--red)" />
            <div>
              <strong>Are you a Uniques student or industry professional?</strong>
              <p>Share how The Uniques Community shaped your journey and inspire the next cohort.</p>
            </div>
          </div>
          <button
            type="button"
            className="btn-red"
            style={{ padding: '9px 20px', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
            onClick={() => setModalOpen(true)}
          >
            Submit Feedback <MessageSquarePlus size={15} />
          </button>
        </div>

      </div>

      {/* Interactive Modal to Submit Testimonial / Review */}
      {modalOpen && (
        <div className="testimonial-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="testimonial-modal-card" onClick={e => e.stopPropagation()}>
            <div className="testimonial-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="testimonial-modal-icon">
                  <MessageSquarePlus size={20} color="#fff" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--txt)' }}>Add Community Comment</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--txt-muted)' }}>Share your experience with Uniques 1.0, 2.0 or Industry Mentorship</span>
                </div>
              </div>
              <button
                type="button"
                className="testimonial-modal-close"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {submittedToast ? (
              <div className="testimonial-success-view">
                <div className="success-check-circle">
                  <CheckCircle2 size={40} color="#22c55e" />
                </div>
                <h4>Thank You for Your Feedback!</h4>
                <p>Your comment has been added to The Uniques spotlight ledger.</p>
              </div>
            ) : (
              <form className="testimonial-form" onSubmit={handleAddReview}>
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ronit JaiPrakash"
                      value={newName}
                      onChange={e => setNewName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Category / Cohort *</label>
                    <select
                      value={newBatch}
                      onChange={e => setNewBatch(e.target.value as any)}
                    >
                      <option value="Uniques 1.0">Uniques 1.0 (Founding Batch)</option>
                      <option value="Uniques 2.0">Uniques 2.0 (Growth Batch)</option>
                      <option value="Industry Mentor">Industry Professional / Mentor</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Designation / Role</label>
                    <input
                      type="text"
                      placeholder="e.g. Software Engineer / Lead"
                      value={newRole}
                      onChange={e => setNewRole(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Company / College</label>
                    <input
                      type="text"
                      placeholder="e.g. Caelius / Microsoft / SVIET"
                      value={newCompany}
                      onChange={e => setNewCompany(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Skill Badge / Specialization</label>
                  <input
                    type="text"
                    placeholder="e.g. MERN Stack Expert, AWS Specialist, System Architect"
                    value={newBadge}
                    onChange={e => setNewBadge(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Your Experience / Comments *</label>
                  <textarea
                    rows={4}
                    placeholder="Describe how The Uniques Community or Unique Care impacted your skills, projects, or mentorship..."
                    value={newQuote}
                    onChange={e => setNewQuote(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Rating</label>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                        onClick={() => setNewRating(star)}
                      >
                        <Star
                          size={22}
                          fill={star <= newRating ? '#f59e0b' : 'transparent'}
                          color={star <= newRating ? '#f59e0b' : 'var(--border)'}
                        />
                      </button>
                    ))}
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--txt)', marginLeft: 6 }}>
                      {newRating}.0 / 5.0
                    </span>
                  </div>
                </div>

                <div className="testimonial-modal-actions">
                  <button
                    type="button"
                    className="btn-dark"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-red"
                  >
                    <Send size={15} />
                    <span>Publish Comment</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
