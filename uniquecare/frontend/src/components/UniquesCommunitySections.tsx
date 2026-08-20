import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Zap, Target, Rocket, Users,
  Box, LayoutGrid, Award, Lightbulb, Cpu, ArrowUpRight, Sparkles
} from 'lucide-react'

export function MissionSection() {
  const [activePillar, setActivePillar] = useState<number>(2) // 0-indexed: default 2 (Entrepreneurial Mindset)

  const pillars = [
    {
      num: '01',
      title: 'Mastering Technology',
      desc: 'Cultivating a deep understanding of cutting-edge technologies, empowering students to innovate beyond traditional academics.',
      extended: 'Hands-on hardware labs, IoT telemetry, real-time cloud microservices, and modern web application development stacks.',
      icon: Zap,
    },
    {
      num: '02',
      title: 'Building Future Innovators',
      desc: 'Nurturing a community of problem-solvers and tech enthusiasts who challenge norms and drive advancements.',
      extended: 'Encouraging peer mentorship, architecture roundtables, sprint hackathons, and high-impact campus infrastructure projects.',
      icon: Target,
    },
    {
      num: '03',
      title: 'Entrepreneurial Mindset',
      desc: 'Encouraging students to think beyond jobs and explore startups, turning ideas into real-world solutions.',
      extended: 'Incubation support, patent drafting guidance, MVP prototyping, and direct angel & venture mentor connections.',
      icon: Rocket,
    },
    {
      num: '04',
      title: 'Collaboration & Growth',
      desc: 'Fostering an ecosystem where like-minded individuals connect, learn, and grow together.',
      extended: 'Cross-batch collaboration uniting Uniques 1.0 alumni with Uniques 2.0 builders to maintain 99.4% campus lab uptime.',
      icon: Users,
    },
  ]

  return (
    <section className="mission-section reveal-on-scroll">
      <div className="mission-container">
        
        {/* Left Column: Heading */}
        <div className="mission-left-col">
          <div className="mission-badge">
            <Sparkles size={14} />
            <span>CORE PURPOSE</span>
          </div>
          <h2 className="mission-title">Mission</h2>
          <div className="mission-red-bar" />
          <p className="mission-lead-text">
            To build a world-class student ecosystem at SVIET that blends technical mastery with real-world infrastructure leadership.
          </p>
        </div>

        {/* Right Column: Interactive Pillars List */}
        <div className="mission-pillars-list">
          {pillars.map((p, idx) => {
            const Icon = p.icon
            const isActive = activePillar === idx

            return (
              <div
                key={p.num}
                className={`mission-pillar-card ${isActive ? 'pillar-active' : ''}`}
                onMouseEnter={() => setActivePillar(idx)}
                onClick={() => setActivePillar(idx)}
              >
                {/* Background Watermark Number */}
                <div className="pillar-watermark-num">{p.num}</div>

                {/* Left Icon with concentric ring effect */}
                <div className="pillar-icon-cluster">
                  <div className="pillar-ring-outer" />
                  <div className="pillar-icon-center">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="pillar-content">
                  <h3 className="pillar-heading">{p.title}</h3>
                  <p className="pillar-desc">{p.desc}</p>
                  
                  {/* Expandable details on hover / active */}
                  <div className={`pillar-extended ${isActive ? 'extended-open' : ''}`}>
                    <p className="pillar-extended-text">{p.extended}</p>
                    <div className="pillar-tag-row">
                      <span className="pillar-pill">Batch 1.0 &amp; 2.0</span>
                      <span className="pillar-pill">Industry Aligned</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export function GuidelinesTracksSection() {
  const navigate = useNavigate()
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(3) // Default highlight on Student Challenges (index 3)

  const tracks = [
    {
      id: 0,
      title: 'Innovation Challenges',
      desc: 'Run corporate challenges & hackathons to develop innovative hardware and software solutions.',
      extended: 'Compete in national hackathons with dedicated lab hardware funding.',
      icon: Box,
      accent: '#3b82f6',
      bgAccent: 'rgba(59, 130, 246, 0.08)',
    },
    {
      id: 1,
      title: 'Product Evangelism',
      desc: 'Ignite customer excitement and drive product adoption through strategic community outreach.',
      extended: 'Present live product demos and open-source campus toolings.',
      icon: LayoutGrid,
      accent: '#ef4444',
      bgAccent: 'rgba(239, 68, 68, 0.08)',
    },
    {
      id: 2,
      title: 'Startup Pitches',
      desc: 'Connect with students globally to identify the brightest young startup founders.',
      extended: 'Pitch MVPs to angel investors and receive seed prototyping grants.',
      icon: Lightbulb,
      accent: '#10b981',
      bgAccent: 'rgba(16, 185, 129, 0.08)',
    },
    {
      id: 3,
      title: 'Student Challenges',
      desc: 'Explore innovative ideas from student minds and turn them into production systems.',
      extended: 'Unique Care was born directly out of a student lab upkeep challenge!',
      icon: Award,
      accent: '#f59e0b',
      bgAccent: 'rgba(245, 158, 11, 0.12)',
      featured: true,
    },
    {
      id: 4,
      title: 'Tech Innovation',
      desc: 'Foster a culture of innovation with cutting-edge technology and 24/7 smart lab access.',
      extended: 'IoT sensor meshes, live telemetry boards, and automated QR workflows.',
      icon: Cpu,
      accent: '#8b5cf6',
      bgAccent: 'rgba(139, 92, 246, 0.08)',
    },
  ]

  return (
    <section className="guidelines-section reveal-on-scroll">
      <div className="guidelines-container">
        
        {/* Header */}
        <div className="guidelines-header">
          <h2>Community <span className="text-red-highlight">Guidelines &amp; Tracks</span></h2>
          <p>
            Innovate effortlessly. Our leading innovation management platform and a network of 5,000+ student creators and mentors help you build solutions and launch them faster.
          </p>
        </div>

        {/* 5-Card Strip */}
        <div className="guidelines-cards-strip">
          {tracks.map((t, idx) => {
            const Icon = t.icon
            const isHovered = hoveredTrack === idx

            return (
              <div
                key={t.id}
                className={`guidelines-card ${isHovered ? 'g-card-hovered' : ''} ${t.featured && hoveredTrack === null ? 'g-card-featured' : ''}`}
                onMouseEnter={() => setHoveredTrack(idx)}
                onMouseLeave={() => setHoveredTrack(null)}
                style={{
                  '--track-accent': t.accent,
                  '--track-bg': t.bgAccent,
                } as React.CSSProperties}
              >
                {/* Circular Icon Cluster */}
                <div className="g-icon-wrap" style={{ color: t.accent, background: t.bgAccent }}>
                  <Icon size={24} />
                </div>

                {/* Title & Desc */}
                <h3 className="g-card-title">{t.title}</h3>
                <p className="g-card-desc">{t.desc}</p>

                {/* Expandable detail on hover */}
                <div className={`g-card-extend ${isHovered ? 'extend-visible' : ''}`}>
                  <p className="g-card-subdetail">{t.extended}</p>
                </div>

                {/* Action CTA Button */}
                <div className="g-card-footer">
                  <button
                    type="button"
                    className="g-view-more-btn"
                    onClick={() => navigate('/issues')}
                  >
                    <span>View More</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
