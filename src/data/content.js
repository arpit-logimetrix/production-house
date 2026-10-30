/**
 * Chitralok Studios — Centralized Content & Media Data
 * Inspired by high-end production houses (Dharma 2.0 aesthetic)
 */

export const siteData = {
  brand: {
    name: 'Chitralok Studios',
    monogram: 'CS',
    fullName: 'Chitralok Studios',
    logo: '/assets/images/logo.png',
    tagline: 'We ideate, produce, collaborate, engage and deliver best-in-class audiovisuals.',
    subTagline: 'We make films people remember.',
    address: '2/248, Vikash Khand Rd, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    phone: '+91 98765 43210',
    emails: {
      projects: 'projects@chitralokstudios.com',
      general: 'hello@chitralokstudios.com',
      careers: 'careers@chitralokstudios.com'
    },
    socials: [
      { name: 'Instagram', url: 'https://instagram.com' },
      { name: 'YouTube', url: 'https://youtube.com' },
      { name: 'Facebook', url: 'https://facebook.com' },
      { name: 'IMDb', url: 'https://www.imdb.com/name/nm9362954/' }
    ]
  },

  hero: {
    tag: '',
    headlinePrefix: 'We make films',
    headlineMain: 'people',
    headlineAccent: 'remember.',
    manifesto: 'We ideate, produce, collaborate, engage and deliver best-in-class audiovisuals for cinema, OTT and global brands.',
    bgImage: '/assets/images/HeroImage1.png',
    slides: [
      {
        id: 1,
        tag: 'PRODUCTION HOUSE · LUCKNOW',
        headlinePrefix: 'We make films',
        headlineMain: 'people',
        headlineAccent: 'remember.',
        manifesto: 'We ideate, produce, collaborate, engage and deliver best-in-class audiovisuals for cinema, OTT and global brands.',
        bgImage: '/assets/images/HeroImage1.png',
        subTag: 'Showreel · 2026',
        videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1',
        ctaText: 'Get in touch ↓',
        ctaLink: '/contact',
        secondaryText: 'View Selected Works →',
        secondaryLink: '/work'
      },
      {
        id: 2,
        tag: 'DIRECTORIAL FEATURE FILM · UPCOMING',
        headlinePrefix: 'Pushpendra Singh\'s',
        headlineMain: 'Aaoge Jab',
        headlineAccent: 'Tum.',
        manifesto: 'A deeply poignant cinematic journey directed by Pushpendra Singh. Coming soon to silver screens across India.',
        bgImage: '/assets/images/HeroImage2.jpg',
        posterImg: '/assets/images/aaoge_jab_tum_poster.jpg',
        subTag: 'Theatrical Release · 2026',
        videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1',
        ctaText: 'Explore Feature Film →',
        ctaLink: '/director',
        secondaryText: 'Watch Showreel →',
        secondaryLink: '/work'
      }
    ],
    videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&loop=1',
    showreelTag: 'Showreel · 2026',
    defaultShowreelVideo: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
  },

  story: {
    badge: 'Our Story',
    title: 'A director’s vision, backed by a producer’s iron discipline.',
    statement: 'Chitralok Studios is an independent Indian production powerhouse. From high-stakes television commercials to critically acclaimed feature films and digital series, we build frames that linger in memory.',
    linkText: 'Explore Our Story'
  },

  directors: [
    {
      id: 1,
      name: 'Pushpendra Singh',
      tag: 'Indian Television & Film Director',
      role: 'Television & Film Director',
      badge: 'Director · Ajmer 92 & Iconic Indian TV Classics',
      img: '/assets/images/pushpenddra_singh.jpg',
      path: '/director',
      dob: '15 September 1981',
      specialty: 'High-Impact Television Drama, Investigative Realism & Epic Narratives',
      summary: 'Pushpendra Singh (born 15 September 1981) is an Indian Television and Film Director. He began his career as an associate director on Kyaa Hoga Nimmo Kaa and worked as second director on Ram Gopal Varma\'s landmark Bollywood film Sarkar (2005), before directing some of the most historic television series in Indian broadcasting history and acclaimed feature films like Ajmer 92.',
      featureFilm: 'Ajmer 92 (2023) & Aaoge Jab Tum',
      trailerVideo: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1',
      imdbUrl: 'https://www.imdb.com/name/nm9362954/',
      notableWorks: [
        'Sarkar (2005 Movie — Second Director)',
        'Ajmer 92 (2023 Feature Film)',
        'Kahaani Ghar Ghar Kii (2008)',
        'Kyunki Saas Bhi Kabhi Bahu Thi (2006)',
        'Kis Desh Mein Hai Meraa Dil',
        'Zindagi Ki Mehek (2017)',
        'Jai Shri Krishna',
        'Shakuntala (2008–2009)',
        'Meera',
        'Kuchh Is Tara (2011)',
        'Sarkar (TV Series)'
      ]
    }
  ],

  featuredWorks: [
    {
      id: 1,
      title: 'Ajmer 92 — Official Feature Film',
      client: 'Reliance Entertainment / Chitralok Studios',
      credit: 'Dir. Pushpendra Singh',
      cat: 'Film',
      year: '2023',
      img: '/assets/images/ajmer92_poster.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
    },
    {
      id: 2,
      title: 'Aaoge Jab Tum — Feature Film',
      client: 'Pushpendra Singh Productions',
      credit: 'Dir. Pushpendra Singh',
      cat: 'Film',
      year: '2026',
      img: '/assets/images/aaoge_jab_tum_poster.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
    },
    {
      id: 3,
      title: 'Sarkar (2005) — Feature Film',
      client: 'K Sera Sera / RGV Film Company',
      credit: 'Second Director: Pushpendra Singh',
      cat: 'Film',
      year: '2005',
      img: '/assets/images/sarkar_movie_hd.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 4,
      title: 'Ishq Toh Ishq Jaisa Hai — Official Song (Ajmer 92)',
      client: 'Zee Music / Reliance Entertainment',
      credit: 'Sung by Javed Ali · Dir. Pushpendra Singh',
      cat: 'Music',
      year: '2023',
      img: '/assets/images/ishq_toh_ishq_jaisa_hai.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/NVeenPm69OE?autoplay=1'
    }
  ],

  allWorks: [
    {
      id: 1,
      cat: 'Film',
      title: 'Ajmer 92 — Official Feature Film',
      client: 'Reliance Entertainment / Chitralok Studios',
      credit: 'Dir. Pushpendra Singh',
      year: '2023',
      img: '/assets/images/ajmer92_poster.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
    },
    {
      id: 2,
      cat: 'Film',
      title: 'Aaoge Jab Tum — Theatrical Feature',
      client: 'Pushpendra Singh Productions',
      credit: 'Dir. Pushpendra Singh',
      year: '2026',
      img: '/assets/images/aaoge_jab_tum_poster.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
    },
    {
      id: 3,
      cat: 'Film',
      title: 'Sarkar (2005) — Feature Film',
      client: 'K Sera Sera / RGV Film Company',
      credit: 'Second Director: Pushpendra Singh',
      year: '2005',
      img: '/assets/images/sarkar_movie_hd.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 4,
      cat: 'Music',
      title: 'Ishq Toh Ishq Jaisa Hai — Song',
      client: 'Zee Music Company',
      credit: 'Sung by Javed Ali · Dir. Pushpendra Singh',
      year: '2023',
      img: '/assets/images/ishq_toh_ishq_jaisa_hai.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/NVeenPm69OE?autoplay=1'
    },
    {
      id: 5,
      cat: 'Ad Film',
      title: 'Aurum Jewels — The Golden Hour',
      client: 'Aurum Jewels',
      credit: 'Dir. Pushpendra Singh',
      year: '2025',
      img: '/assets/images/aurum_jewels.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
    },
    {
      id: 5,
      cat: 'Series',
      title: 'Zindagi Ki Mehek',
      client: 'Zee TV / Parin Multimedia',
      credit: 'Dir. Pushpendra Singh',
      year: '2017',
      img: '/assets/images/zindagi_ki_mehek.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 6,
      cat: 'Series',
      title: 'Kahaani Ghar Ghar Kii',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2008',
      img: '/assets/images/kahaani_ghar_ghar_kii.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 7,
      cat: 'Series',
      title: 'Kyunki Saas Bhi Kabhi Bahu Thi',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2006',
      img: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 8,
      cat: 'Series',
      title: 'Jai Shri Krishna',
      client: 'Colors TV / Sagar Pictures',
      credit: 'Dir. Pushpendra Singh',
      year: '2008-2009',
      img: '/assets/images/jai_shri_krishna.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 9,
      cat: 'Series',
      title: 'Shakuntala',
      client: 'STAR One / Sagar Arts',
      credit: 'Dir. Pushpendra Singh',
      year: '2008-2009',
      img: '/assets/images/shakuntala.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 10,
      cat: 'Series',
      title: 'Meera',
      client: 'NDTV Imagine / Sagar Arts',
      credit: 'Dir. Pushpendra Singh',
      year: '2009',
      img: '/assets/images/meera.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 11,
      cat: 'Series',
      title: 'Kis Desh Mein Hai Meraa Dil',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2008',
      img: '/assets/images/kis_desh_mein_hai_meraa_dil.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 12,
      cat: 'Series',
      title: 'Kuchh Is Tara',
      client: 'Sony Entertainment TV / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2011',
      img: '/assets/images/kuchh_is_tara.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 13,
      cat: 'Series',
      title: 'Sarkar',
      client: 'Zee TV / Siddhant Cinevision',
      credit: 'Dir. Pushpendra Singh',
      year: '2006',
      img: '/assets/images/sarkar.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 14,
      cat: 'Series',
      title: 'Kyaa Hoga Nimmo Kaa',
      client: 'STAR One / Balaji Telefilms',
      credit: 'Associate Dir. Pushpendra Singh',
      year: '2006',
      img: '/assets/images/kyaa_hoga_nimmo_kaa.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    }
  ],

  btsGallery: [
    {
      title: 'Ajmer 92 — Principal Photography Location',
      meta: 'Pushpendra Singh directing high-stakes dramatic scene · 35mm Arri Alexa',
      img: '/assets/images/bts_film_set.jpg'
    },
    {
      title: 'Aurum Jewels — Lighting Masterclass',
      meta: 'Chitralok Cinematography Unit · Anamorphic Prime Lenses & Monitor Rig',
      img: '/assets/images/bts_camera_rig.jpg'
    },
    {
      title: 'Velocity Motors — High-Speed Pursuit Car Rig',
      meta: 'Chitralok Action Unit · Pursuit Arm Rig & Precision Stabilizer',
      img: '/assets/images/bts_pursuit_rig.jpg'
    },
    {
      title: 'Directorial Rehearsal & Screenplay Polish',
      meta: 'Pushpendra Singh conducting intensive character reading with ensemble',
      img: '/assets/images/bts_rehearsal.jpg'
    },
    {
      title: 'Post-Production & Atmos Sound Mixing',
      meta: 'Chitralok Studio 4 · Dolby Atmos 7.1.4 Surround & Final Color DI',
      img: '/assets/images/bts_sound_mixing.jpg'
    }
  ],

  clients: [
    'Aurum Jewels',
    'Velocity Motors',
    'Nimbus Air',
    'Lumen Mobile',
    'Kesari Chai Co.',
    'Halcyon Watches',
    'Tarang Beverages',
    'Banyan Bank',
    'D’Decor Lifestyle',
    'Azorte Fashion',
    'Reliance Jewels',
    'Ajio Luxe'
  ],

  about: {
    headingPart1: 'We see',
    headingAccent: 'cinema',
    headingPart2: 'as craft first: every frame planned, every story earned.',
    bannerImg: '/assets/images/about_studio_soundstage.jpg',
    p1: 'Chitralok Studios began with one camera, a tight-knit unit, and an uncompromising belief: stories from India deserve the discipline and artistic depth of world cinema. Today, we stand as a premier creative production hub headquartered in Lucknow.',
    p2: 'We are celebrated for commercial advertising that carries the soul and patience of auteur cinema, and independent productions executed with international commercial rigor. Our core directors, DoPs, sound engineers, and post-production artists collaborate like a synchronized orchestra.',
    steps: [
      { n: '01', title: 'Develop', text: 'Script treatments, storyboards, creative briefs and tone boards fine-tuned until the cinematic vision is razor sharp.' },
      { n: '02', title: 'Produce', text: 'World-class camera gear, precision lighting, casting, location scouting, and a seasoned unit executing under tight timelines.' },
      { n: '03', title: 'Finish', text: 'High-end DI color grading, Dolby Atmos sound design, editorial rhythm and VFX delivered to master standards.' }
    ],
    stats: [
      { v: '120+', l: 'Productions Delivered' },
      { v: '18+', l: 'Years in Industry' },
      { v: '10+', l: 'Iconic Prime-Time Shows' },
      { v: '60+', l: 'Partner Brands & Studios' }
    ],
    crew: [
      { name: 'Pushpendra Singh', role: 'Director & Screenwriter' },
      { name: 'Chitralok Cinematography Unit', role: 'Direction of Photography' },
      { name: 'Chitralok Sound & Atmos Lab', role: 'Dolby Atmos Sound & Music' },
      { name: 'Chitralok Post & Color DI', role: 'Lead Editorial & Color Grading' },
      { name: 'Chitralok Production Operations', role: 'Line & Executive Production' }
    ]
  },

  director: {
    nameFirst: 'Pushpendra',
    nameLast: 'Singh',
    born: '15 September 1981',
    role: 'Television & Film Director',
    portraitImg: '/assets/images/pushpenddra_singh.jpg',
    reelImg: '/assets/images/ajmer92_trailer_still.jpg',
    reelVideo: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1',
    imdbUrl: 'https://www.imdb.com/name/nm9362954/',
    quote: '“Stories on screen become part of the collective consciousness when told with truth and unwavering craft.”',
    bio1: 'Pushpendra Singh (born 15 September 1981) is a prominent Indian Television and Film Director. He started his career in the Indian entertainment industry as an associate director on Kyaa Hoga Nimmo Kaa and served as second director on the classic Bollywood political drama Sarkar (2005) starring Amitabh Bachchan.',
    bio2: 'Following this breakthrough, Pushpendra took the directorial helm for several of the highest-rated daily series and mythological epics in Indian television history, including Kahaani Ghar Ghar Kii (2008), Kyunki Saas Bhi Kabhi Bahu Thi (2006), Kis Desh Mein Hai Meraa Dil, Kuchh Is Tara (2011), Jai Shri Krishna, Meera, Shakuntala (2008–2009), Zindagi Ki Mehek (2017), and Sarkar (TV Series).',
    bio3: 'Expanding his cinematic horizon, Pushpendra directed the landmark investigative feature film Ajmer 92 (2023), backed by Reliance Entertainment, earning acclaim for its unflinching realism and emotional impact. He is currently helming the upcoming theatrical feature film Aaoge Jab Tum (2026).',
    films: [
      {
        year: '2026',
        title: 'Aaoge Jab Tum',
        kind: 'Feature Film (Director)',
        network: 'Theatrical Release',
        role: 'Director',
        img: '/assets/images/aaoge_jab_tum_poster.jpg'
      },
      {
        year: '2023',
        title: 'Ajmer 92',
        kind: 'Feature Film (Director & Screenplay)',
        network: 'Reliance Entertainment',
        role: 'Director & Screenwriter',
        img: '/assets/images/ajmer92_poster.jpg'
      },
      {
        year: '2005',
        title: 'Sarkar (Movie)',
        kind: 'Feature Film (Second Director)',
        network: 'RGV Film Company / Theatrical',
        role: 'Second Director',
        img: '/assets/images/sarkar_movie_poster.jpg'
      },
      {
        year: '2017',
        title: 'Zindagi Ki Mehek',
        kind: 'Television Series',
        network: 'Zee TV',
        role: 'Director',
        img: '/assets/images/zindagi_ki_mehek.jpg'
      },
      {
        year: '2011',
        title: 'Kuchh Is Tara',
        kind: 'Television Series',
        network: 'Sony Entertainment TV / Balaji',
        role: 'Director',
        img: '/assets/images/kuchh_is_tara.jpg'
      },
      {
        year: '2009',
        title: 'Meera',
        kind: 'Mythological Series',
        network: 'NDTV Imagine / Sagar Arts',
        role: 'Director',
        img: '/assets/images/meera.jpg'
      },
      {
        year: '2008–2009',
        title: 'Shakuntala',
        kind: 'Mythological Romance',
        network: 'STAR One / Sagar Arts',
        role: 'Director',
        img: '/assets/images/shakuntala.jpg'
      },
      {
        year: '2008–2009',
        title: 'Jai Shri Krishna',
        kind: 'Mythological Drama',
        network: 'Colors TV / Sagar Pictures',
        role: 'Director',
        img: '/assets/images/jai_shri_krishna.jpg'
      },
      {
        year: '2008',
        title: 'Kahaani Ghar Ghar Kii',
        kind: 'Flagship Daily Series',
        network: 'Star Plus / Balaji Telefilms',
        role: 'Director',
        img: '/assets/images/kahaani_ghar_ghar_kii.jpg'
      },
      {
        year: '2008',
        title: 'Kis Desh Mein Hai Meraa Dil',
        kind: 'Drama Series',
        network: 'Star Plus / Balaji Telefilms',
        role: 'Director',
        img: '/assets/images/kis_desh_mein_hai_meraa_dil.jpg'
      },
      {
        year: '2006',
        title: 'Kyunki Saas Bhi Kabhi Bahu Thi',
        kind: 'Iconic Daily Drama',
        network: 'Star Plus / Balaji Telefilms',
        role: 'Director',
        img: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.jpg'
      },
      {
        year: '2006',
        title: 'Sarkar',
        kind: 'Political Family Drama',
        network: 'Zee TV / Siddhant Cinevision',
        role: 'Director',
        img: '/assets/images/sarkar.jpg'
      },
      {
        year: '2006',
        title: 'Kyaa Hoga Nimmo Kaa',
        kind: 'Comedy Drama Series',
        network: 'STAR One / Balaji Telefilms',
        role: 'Associate Director',
        img: '/assets/images/kyaa_hoga_nimmo_kaa.jpg'
      }
    ],
    awards: [
      {
        title: 'Landmark Prime-Time Directorials',
        meta: 'Kyunki Saas Bhi Kabhi Bahu Thi & Kahaani Ghar Ghar Kii'
      },
      {
        title: 'Director & Screenwriter, Ajmer 92 (2023)',
        meta: 'Critically Acclaimed Feature Film'
      },
      {
        title: 'Director, Zindagi Ki Mehek (2017)',
        meta: 'Zee TV Prime-Time Directorial'
      },
      {
        title: 'Mythological Canvas Direction',
        meta: 'Jai Shri Krishna · Shakuntala · Meera'
      }
    ]
  }
};
