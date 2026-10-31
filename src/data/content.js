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
    address: '2/248, Vikash Khand Rd, Gomti Nagar, Lucknow, Uttar Pradesh -226010',
    addressLines: [
      'S & P Chitralok Studios',
      '2/248, Vikash Khand Rd,',
      'Gomti Nagar, Lucknow,',
      'Uttar Pradesh -226010'
    ],
    phone: '+91 6394-177916',
    email: 'acc.spchitralok@gmail.com',
    emails: {
      projects: 'acc.spchitralok@gmail.com',
      general: 'acc.spchitralok@gmail.com',
      careers: 'acc.spchitralok@gmail.com'
    },
    socials: [
      { name: 'Instagram', url: 'https://www.instagram.com/chitralokstudios.sp/' },
      { name: 'YouTube', url: 'https://youtube.com' },
      { name: 'Facebook', url: 'https://www.facebook.com/people/ChitralokStudios/61596235132778/' },
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
      img: '/assets/images/ajmer92_trailer_still.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
    },
    {
      id: 2,
      title: 'Aaoge Jab Tum — Feature Film',
      client: 'Pushpendra Singh Productions',
      credit: 'Dir. Pushpendra Singh',
      cat: 'Film',
      year: '2026',
      img: '/assets/images/HeroImage2.jpg',
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
      genre: 'Investigative Crime Thriller',
      director: 'Pushpendra Singh',
      studio: 'Reliance Entertainment & Chitralok Studios',
      milestone: 'Acclaimed National Theatrical Release',
      img: '/assets/images/ajmer92_trailer_still.jpg',
      bannerImg: '/assets/images/ajmer92_trailer_still.jpg',
      synopsis: 'Based on the harrowing 1992 Ajmer blackmail and gang rape case, an uncompromising crime drama following an intrepid journalist and police officers uncovering an insidious web of power and exploitation targeting young collegiate women.',
      stills: [
        { img: '/assets/images/ajmer92_trailer_still.jpg', title: 'Courtroom & Media Confrontation', tag: 'Principal Photography' },
        { img: '/assets/images/ajmer92_poster.jpg', title: 'Theatrical Release Artwork', tag: 'Official Poster' },
        { img: '/assets/images/bts_film_set.jpg', title: 'Pushpendra Singh Directing on 35mm Arri Rig', tag: 'Behind the Scenes' },
        { img: '/assets/images/bts_rehearsal.jpg', title: 'Cast Scene Blocking & High-Stakes Rehearsal', tag: 'Production Still' }
      ],
      cast: [
        { actor: 'Karan Verma', character: 'Madhav Verma', role: 'Investigative Journalist / Protagonist' },
        { actor: 'Sumit Singh', character: 'Geeta Singh', role: 'Lead Female Protagonist' },
        { actor: 'Rajesh Sharma', character: 'SP Ranjit Singh', role: 'Superintendent of Police', img: '/assets/images/cast/rajesh_sharma.jpg' },
        { actor: 'Brijendra Kala', character: 'Jagdish Verma', role: 'Senior Journalist & Father', img: '/assets/images/cast/brijendra_kala.jpg' },
        { actor: 'Zarina Wahab', character: 'Urmila Verma', role: "Madhav's Mother", img: '/assets/images/cast/zarina_wahab.jpg' },
        { actor: 'Sayaji Shinde', character: 'DIG Shekhawat', role: 'Deputy Inspector General', img: '/assets/images/cast/sayaji_shinde.jpg' },
        { actor: 'Manoj Joshi', character: 'Chief Minister', role: 'State Minister', img: '/assets/images/cast/manoj_joshi.jpg' },
        { actor: 'Shalini Kapoor', character: 'Surya Kumari', role: 'College Principal' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
    },
    {
      id: 2,
      cat: 'Film',
      title: 'Aaoge Jab Tum — Theatrical Feature',
      client: 'Pushpendra Singh Productions',
      credit: 'Dir. Pushpendra Singh',
      year: '2026',
      genre: 'Romantic Drama / Musical Odyssey',
      director: 'Pushpendra Singh',
      studio: 'Pushpendra Singh Productions',
      milestone: 'Upcoming Directorial Feature Film',
      img: '/assets/images/HeroImage2.jpg',
      bannerImg: '/assets/images/HeroImage2.jpg',
      synopsis: 'An evocative upcoming directorial feature by Pushpendra Singh exploring themes of profound longing, destiny, and timeless romance across evocative cultural landscapes, set against an unforgettable classical music score.',
      stills: [
        { img: '/assets/images/HeroImage2.jpg', title: 'Theatrical Landscape Visual Experience', tag: 'Master Key Art' },
        { img: '/assets/images/aaoge_jab_tum_poster.jpg', title: 'Official Theatrical Teaser Poster', tag: 'Poster' },
        { img: '/assets/images/bts_sound_mixing.jpg', title: 'Dolby Atmos Master Scoring Stage', tag: 'Soundstage' },
        { img: '/assets/images/about_studio_soundstage.jpg', title: 'Chitralok Studio Production Floor', tag: 'Studio Set' }
      ],
      cast: [
        { actor: 'Ensemble Cast', character: 'Narrative Ensemble', role: 'Principal Cast' },
        { actor: 'Pushpendra Singh', character: 'Direction & Screenplay', role: 'Director' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
    },
    {
      id: 3,
      cat: 'Film',
      title: 'Sarkar (2005) — Feature Film',
      client: 'K Sera Sera / RGV Film Company',
      credit: 'Second Director: Pushpendra Singh',
      year: '2005',
      genre: 'Political Crime Epic / Drama',
      director: 'Ram Gopal Varma · Second Dir. Pushpendra Singh',
      studio: 'K Sera Sera & RGV Film Company',
      milestone: 'Iconic Indian Cinematic Masterpiece',
      img: '/assets/images/sarkar_movie_hd.jpg',
      bannerImg: '/assets/images/sarkar_movie_hd.jpg',
      synopsis: 'The landmark Indian political crime epic inspired by The Godfather, chronicling the reign of patriarch Subhash Nagre, an extra-governmental justice figure in Mumbai, and his younger son Shankar who steps into the crucible to defend the dynasty.',
      stills: [
        { img: '/assets/images/sarkar_movie_hd.jpg', title: 'Subhash & Shankar Nagre Council Confrontation', tag: 'Iconic Still' },
        { img: '/assets/images/sarkar_prime_hd.jpg', title: 'Subhash Nagre Public Address to Mumbai', tag: 'Prime Video HD' },
        { img: '/assets/images/sarkar_movie_poster.jpg', title: 'Original Theatrical Release One-Sheet', tag: 'Theatrical Art' },
        { img: '/assets/images/cd04039d-35ae-4094-88d2-d39d430fe44c.jpg', title: 'Anamorphic 35mm Master Cinematography Frame', tag: 'Master Film Frame' }
      ],
      cast: [
        { actor: 'Amitabh Bachchan', character: "Subhash Nagre 'Sarkar'", role: 'Patriarch & Titular Lead', img: '/assets/images/cast/amitabh_bachchan.jpg' },
        { actor: 'Abhishek Bachchan', character: 'Shankar Nagre', role: 'Son & Successor', img: '/assets/images/cast/abhishek_bachchan.jpg' },
        { actor: 'Kay Kay Menon', character: 'Vishnu Nagre', role: 'Elder Son', img: '/assets/images/cast/kay_kay_menon.jpg' },
        { actor: 'Katrina Kaif', character: 'Pooja', role: "Shankar's Fiancée", img: '/assets/images/cast/katrina_kaif.jpg' },
        { actor: 'Anupam Kher', character: 'Motilal Khurana', role: 'Opposition Politician', img: '/assets/images/cast/anupam_kher.jpg' },
        { actor: 'Supriya Pathak', character: 'Pushpa Nagre', role: 'Wife of Sarkar' },
        { actor: 'Kota Srinivasa Rao', character: 'Silver Mani', role: 'Key Antagonist' },
        { actor: 'Tanishaa Mukerji', character: 'Avantika', role: 'Family Confidante' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 4,
      cat: 'Music',
      title: 'Ishq Toh Ishq Jaisa Hai — Song',
      client: 'Zee Music Company',
      credit: 'Sung by Javed Ali · Dir. Pushpendra Singh',
      year: '2023',
      genre: 'Original Soundtrack / Soulful Ballad',
      director: 'Pushpendra Singh',
      studio: 'Zee Music Company & Reliance Entertainment',
      milestone: 'Multi-Million Streaming Romantic Anthem',
      img: '/assets/images/ishq_toh_ishq_jaisa_hai.jpg',
      bannerImg: '/assets/images/ishq_toh_ishq_jaisa_hai.jpg',
      synopsis: 'The official romantic and introspective ballad from the feature film Ajmer 92, composed with traditional instrumentation and performed with soulful vulnerability by National Award-winning vocalist Javed Ali.',
      stills: [
        { img: '/assets/images/ishq_toh_ishq_jaisa_hai.jpg', title: 'Javed Ali Soulful Vocal Performance', tag: 'Official Music Video' },
        { img: '/assets/images/ajmer92_trailer_still.jpg', title: 'Cinematic Narrative Couple Frame', tag: 'Featured Scene' },
        { img: '/assets/images/bts_sound_mixing.jpg', title: 'Live Symphony & Vocal Tracking Session', tag: 'Acoustic Studio' }
      ],
      cast: [
        { actor: 'Javed Ali', character: 'Lead Playback Vocalist', role: 'National Award Winner', img: '/assets/images/cast/javed_ali.jpg' },
        { actor: 'Karan Verma', character: 'Madhav Verma', role: 'Featured Actor' },
        { actor: 'Sumit Singh', character: 'Geeta Singh', role: 'Featured Actor' },
        { actor: 'Parth Sakalley', character: 'Music Direction & Composition', role: 'Composer' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/NVeenPm69OE?autoplay=1'
    },
    {
      id: 5,
      cat: 'Ad Film',
      title: 'Aurum Jewels — The Golden Hour',
      client: 'Aurum Jewels',
      credit: 'Dir. Pushpendra Singh',
      year: '2025',
      genre: 'Luxury Commercial / Brand Film',
      director: 'Pushpendra Singh',
      studio: 'Aurum Brand Studios & Chitralok Films',
      milestone: 'High-Fashion Royal Brand Campaign',
      img: '/assets/images/aurum_jewels_hd.jpg',
      bannerImg: '/assets/images/aurum_jewels_hd.jpg',
      synopsis: 'A high-concept commercial campaign capturing timeless royal heritage and immaculate gold craftsmanship. Directed by Pushpendra Singh, utilizing anamorphic lenses and soft golden-hour natural illumination.',
      stills: [
        { img: '/assets/images/aurum_jewels_hd.jpg', title: 'The Golden Hour 16:9 Widescreen Frame', tag: 'Commercial Master' },
        { img: '/assets/images/aurum_jewels.jpg', title: 'Royal Heritage Jewelry Editorial Frame', tag: 'Print Campaign' },
        { img: '/assets/images/bts_camera_rig.jpg', title: 'Lighting Masterclass & Anamorphic Camera Rig', tag: 'Behind the Scenes' }
      ],
      cast: [
        { actor: 'Maya Sen', character: 'Royal Protagonist', role: 'Brand Ambassador / Model' },
        { actor: 'Pushpendra Singh', character: 'Director & Vision', role: 'Commercial Director' },
        { actor: 'Chitralok Unit', character: 'Cinematography Crew', role: 'Camera & Lighting Team' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/3fulFQKpFEo?autoplay=1'
    },
    {
      id: 6,
      cat: 'Series',
      title: 'Zindagi Ki Mehek',
      client: 'Zee TV / Parin Multimedia',
      credit: 'Dir. Pushpendra Singh',
      year: '2016-2017',
      genre: 'Romantic Drama / Culinary Romance',
      director: 'Pushpendra Singh',
      studio: 'Zee TV & Parin Multimedia',
      milestone: '500+ Prime Time Episodes on Zee TV',
      img: '/assets/images/zindagi_ki_mehek.jpg',
      bannerImg: '/assets/images/zindagi_ki_mehek.jpg',
      synopsis: 'A groundbreaking prime-time romance drama set against Delhi culinary culture, tracking the clash and electric chemistry between passionate home-cook Mehek and ruthless restaurateur Shaurya Khanna.',
      stills: [
        { img: '/assets/images/zindagi_ki_mehek.jpg', title: 'Mehek & Shaurya Dramatic Kitchen Confrontation', tag: 'ZEE5 Master Frame' },
        { img: '/assets/images/bts_film_set.jpg', title: 'Multi-Camera Studio Production Set', tag: 'Behind the Scenes' },
        { img: '/assets/images/bts_rehearsal.jpg', title: 'Scene Dialogue Walkthrough & Script Session', tag: 'Rehearsal' }
      ],
      cast: [
        { actor: 'Samiksha Jaiswal', character: 'Mehek Sharma / Vandana', role: 'Lead Female Protagonist' },
        { actor: 'Karan Vohra', character: 'Shaurya Khanna / Singh Ahlawat', role: 'Lead Male Protagonist' },
        { actor: 'Shiny Dixit', character: 'Nehal Sharma', role: 'Mehek Sister' },
        { actor: 'Radha Bhatt', character: 'Shwetlana Agarwal', role: 'Antagonist' },
        { actor: 'Aadesh Chaudhary', character: 'Armaan', role: 'Supporting Cast' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 7,
      cat: 'Series',
      title: 'Kahaani Ghar Ghar Kii',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2000-2008',
      genre: 'Family Saga / Cultural Phenomenon',
      director: 'Pushpendra Singh',
      studio: 'Star Plus & Balaji Telefilms',
      milestone: 'Historic 1600+ Episodes TV Legend',
      img: '/assets/images/kahaani_ghar_ghar_kii.jpg',
      bannerImg: '/assets/images/kahaani_ghar_ghar_kii.jpg',
      synopsis: 'One of Indian television most celebrated and influential family sagas, chronicling the trials, moral values, and unbreakable bonds of the Agarwal household under the quiet strength of its ideal daughter-in-law, Parvati.',
      stills: [
        { img: '/assets/images/kahaani_ghar_ghar_kii.jpg', title: 'Parvati & Om Agarwal Iconic Moment', tag: 'JioHotstar 1080p Master' },
        { img: '/assets/images/bts_film_set.jpg', title: 'Balaji Telefilms Golden Era Production Floor', tag: 'Behind the Scenes' },
        { img: '/assets/images/bts_sound_mixing.jpg', title: 'Iconic Title Song Studio Recording', tag: 'Theme Score' }
      ],
      cast: [
        { actor: 'Sakshi Tanwar', character: 'Parvati Agarwal', role: 'Iconic Lead Protagonist', img: '/assets/images/cast/sakshi_tanwar.jpg' },
        { actor: 'Ali Asgar', character: 'Kamal Agarwal', role: 'Brother', img: '/assets/images/cast/ali_asgar.jpg' },
        { actor: 'Kiran Karmarkar', character: 'Om Agarwal', role: 'Lead Male Protagonist' },
        { actor: 'Deepak Qazir', character: 'Vishwanath Agarwal (Babuji)', role: 'Family Patriarch' },
        { actor: 'Chetan Hansraj', character: 'Saasha', role: 'Antagonist' },
        { actor: 'Shweta Kawatra', character: 'Pallavi Agarwal', role: 'Key Antagonist' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 8,
      cat: 'Series',
      title: 'Kyunki Saas Bhi Kabhi Bahu Thi',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2000-2008',
      genre: 'Family Drama / Television Legend',
      director: 'Pushpendra Singh',
      studio: 'Star Plus & Balaji Telefilms',
      milestone: 'Record-Breaking 1833 Episodes Culture Shaper',
      img: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.jpg',
      bannerImg: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.jpg',
      synopsis: 'The cultural milestone that redefined South Asian entertainment across the globe, chronicling three generations of the grand Virani joint family in Gujarat guided by the moral compass and fortitude of Tulsi Virani.',
      stills: [
        { img: '/assets/images/kyunki_saas_bhi_kabhi_bahu_thi.jpg', title: 'Tulsi Virani Shanti Niketan Grand Arrival', tag: '1280x720 HD Broadcast' },
        { img: '/assets/images/bts_film_set.jpg', title: 'Virani Haveli Architectural Studio Floor', tag: 'Production Set' },
        { img: '/assets/images/bts_rehearsal.jpg', title: 'Grand Ensemble Cast Script Coordination', tag: 'Cast Rehearsal' }
      ],
      cast: [
        { actor: 'Smriti Irani', character: 'Tulsi Virani', role: 'Legendary Lead Protagonist', img: '/assets/images/cast/smriti_irani.jpg' },
        { actor: 'Ronit Roy', character: 'Mihir Virani (Subsequent)', role: 'Lead Male Role', img: '/assets/images/cast/ronit_roy.jpg' },
        { actor: 'Amar Upadhyay', character: 'Mihir Virani', role: 'Husband & Scion' },
        { actor: 'Sudha Shivpuri', character: 'Baa (Amba Govardhan Virani)', role: 'Matriarch' },
        { actor: 'Hiten Tejwani', character: 'Karan Virani', role: 'Son & Moral Successor' },
        { actor: 'Gauri Pradhan', character: 'Nandini Virani', role: 'Daughter-in-law' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 9,
      cat: 'Series',
      title: 'Jai Shri Krishna',
      client: 'Colors TV / Sagar Pictures',
      credit: 'Dir. Pushpendra Singh',
      year: '2008-2009',
      genre: 'Mythological Epic / Spiritual Drama',
      director: 'Pushpendra Singh',
      studio: 'Colors TV & Sagar Pictures',
      milestone: 'Top-Rated Colors TV Mythological Flagship',
      img: '/assets/images/jai_shri_krishna.jpg',
      bannerImg: '/assets/images/jai_shri_krishna.jpg',
      synopsis: 'An exquisite mythological production chronicling the divine bal-leela (childhood miracles), pastoral charms of Vrindavan, and ultimate victory of Lord Krishna over the tyrant Kansa.',
      stills: [
        { img: '/assets/images/jai_shri_krishna.jpg', title: 'Little Makhan-Chor Bal Krishna in Vrindavan', tag: '1280x720 HD Master' },
        { img: '/assets/images/bts_camera_rig.jpg', title: 'Sagar Arts Divine Visual Effects & Lighting Rig', tag: 'Camera Setup' },
        { img: '/assets/images/about_studio_soundstage.jpg', title: 'Gokul & Mathura Palace Set Architecture', tag: 'Studio Set' }
      ],
      cast: [
        { actor: 'Dhriti Bhatia', character: 'Bal Krishna (Child)', role: 'Titular Divine Lead' },
        { actor: 'Meghan Jadhav', character: 'Shri Krishna (Adolescent)', role: 'Lord Krishna' },
        { actor: 'Kritika Sharma', character: 'Radha', role: 'Divine Consort' },
        { actor: 'Aditi Sajwan', character: 'Yashoda Maiyya', role: 'Foster Mother' },
        { actor: 'Raj Premi', character: 'Maharaj Kansa', role: 'Tyrant King / Antagonist' },
        { actor: 'Saurabh Raj Jain', character: 'Lord Vishnu', role: 'Supreme Preserver' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 10,
      cat: 'Series',
      title: 'Shakuntala',
      client: 'STAR One / Sagar Arts',
      credit: 'Dir. Pushpendra Singh',
      year: '2009',
      genre: 'Mythological Romance / Epic Drama',
      director: 'Pushpendra Singh',
      studio: 'STAR One & Sagar Arts',
      milestone: 'Opulent Kalidasa Sanskrit Classic Adaptation',
      img: '/assets/images/shakuntala.jpg',
      bannerImg: '/assets/images/shakuntala.jpg',
      synopsis: 'A grand visual adaptation of Kalidasa classical Sanskrit masterpiece Abhijnanasakuntalam, narrating the fated love, curse-driven separation, and royal reunion of King Dushyanta and forest maiden Shakuntala.',
      stills: [
        { img: '/assets/images/shakuntala.jpg', title: 'Princess Shakuntala in Ancient Forest Sanctuary', tag: '1280x720 HD Master' },
        { img: '/assets/images/bts_camera_rig.jpg', title: 'Sagar Arts Mythological Exterior Lighting Rig', tag: 'Camera Rig' }
      ],
      cast: [
        { actor: 'Neha Mehta', character: 'Shakuntala', role: 'Title Role / Forest Princess' },
        { actor: 'Gautam Sharma', character: 'Rajkumar Dushyant', role: 'King of Hastinapur' },
        { actor: 'Sunny Singh (Nijjar)', character: 'Karan', role: 'Key Supporting Character' },
        { actor: 'Gagan Malik', character: 'Senapati Veer', role: 'Royal Commander' },
        { actor: 'Shabana Mullani', character: 'Rajkumari Kalki', role: 'Antagonist' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 11,
      cat: 'Series',
      title: 'Meera',
      client: 'NDTV Imagine / Sagar Arts',
      credit: 'Dir. Pushpendra Singh',
      year: '2009-2010',
      genre: 'Biographical Historical Drama',
      director: 'Pushpendra Singh',
      studio: 'NDTV Imagine & Sagar Arts',
      milestone: 'Critically Acclaimed Biographical Television Drama',
      img: '/assets/images/meera.jpg',
      bannerImg: '/assets/images/meera.jpg',
      synopsis: 'The inspiring biographical chronicle celebrating 16th-century Rajput princess-poet Meera Bai, whose sublime devotion to Lord Krishna challenged regal tyranny, orthodox society, and mortal threats.',
      stills: [
        { img: '/assets/images/meera.jpg', title: 'Young Meera Bai Divine Bhajan Recital', tag: '1280x720 HD Master' },
        { img: '/assets/images/bts_sound_mixing.jpg', title: 'Classical Devotional Scoring Orchestration', tag: 'Music Stage' }
      ],
      cast: [
        { actor: 'Aashika Bhatia', character: 'Young Meera Bai', role: 'Child Prodigy Lead' },
        { actor: 'Aditi Sajwan', character: 'Elder Meera Bai', role: 'Saint-Princess Lead' },
        { actor: 'Kunal Bakshi', character: 'Ratan Singh', role: "Meera's Father" },
        { actor: 'Paras Arora', character: 'Jaimal', role: "Meera's Cousin" },
        { actor: 'Arvind Rao', character: 'Maharaj Bhojraj', role: "Meera's Husband" }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 12,
      cat: 'Series',
      title: 'Kis Desh Mein Hai Meraa Dil',
      client: 'Star Plus / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2008-2010',
      genre: 'Romantic Drama / Family Tragedy',
      director: 'Pushpendra Singh',
      studio: 'Star Plus & Balaji Telefilms',
      milestone: '444 Episodes & Sushant Singh Rajput Historic Screen Debut',
      img: '/assets/images/kis_desh_mein_hai_meraa_dil.jpg',
      bannerImg: '/assets/images/kis_desh_mein_hai_meraa_dil.jpg',
      synopsis: 'A sweeping cross-border romance depicting unconditional devotion and personal sacrifice. It notably introduced Sushant Singh Rajput in his television acting debut as the beloved younger brother Preet Juneja.',
      stills: [
        { img: '/assets/images/kis_desh_mein_hai_meraa_dil.jpg', title: 'Sushant Singh Rajput Debut Scene as Preet Juneja', tag: '1280x720 HD Debut Frame' },
        { img: '/assets/images/bts_film_set.jpg', title: 'Balaji Telefilms North India Outdoor Unit', tag: 'Location Shoot' }
      ],
      cast: [
        { actor: 'Sushant Singh Rajput', character: 'Preet Juneja', role: 'Beloved Brother (Screen Debut)', img: '/assets/images/cast/sushant_singh_rajput.jpg' },
        { actor: 'Harshad Chopda', character: 'Prem Juneja', role: 'Lead Male Protagonist', img: '/assets/images/cast/harshad_chopda.jpg' },
        { actor: 'Additi Gupta', character: 'Heer Maan', role: 'Lead Female Protagonist' },
        { actor: 'Meher Vij', character: 'Meher Maan', role: 'Sister' },
        { actor: 'Mahesh Shetty', character: 'Nihaal Balwant Mann', role: 'Key Antagonist' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 13,
      cat: 'Series',
      title: 'Kuchh Is Tara',
      client: 'Sony Entertainment TV / Balaji Telefilms',
      credit: 'Dir. Pushpendra Singh',
      year: '2007-2008',
      genre: 'Romantic Comedy / Corporate Drama',
      director: 'Pushpendra Singh',
      studio: 'Sony TV & Balaji Telefilms',
      milestone: 'Prime Time Sony TV Romantic Comedy',
      img: '/assets/images/kuchh_is_tara.jpg',
      bannerImg: '/assets/images/kuchh_is_tara.jpg',
      synopsis: 'A witty, lighthearted romantic comedy chronicling Kanya Godbole, an optimistic girl living with a split identity condition who finds herself in a whirlwind contract marriage within the elite Nanda business empire.',
      stills: [
        { img: '/assets/images/kuchh_is_tara.jpg', title: 'Kanya Godbole & Ranbir Nanda Wedding Sequence', tag: '1280x720 HD Broadcast' },
        { img: '/assets/images/bts_rehearsal.jpg', title: 'Studio Rehearsal & Comic Timing Session', tag: 'Rehearsal' }
      ],
      cast: [
        { actor: 'Dimple Jhangiani', character: 'Kanya Godbole / Natasha', role: 'Dual Identity Protagonist', img: '/assets/images/cast/dimple_jhangiani.jpg' },
        { actor: 'Akashdeep Saigal', character: 'Ranbir Nanda', role: 'Lead Male Protagonist' },
        { actor: 'Vishal Singh', character: 'Ayan Nanda', role: 'Corporate Scion' },
        { actor: 'Sudha Chandran', character: 'Mallika Nanda', role: 'Business Matriarch' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 14,
      cat: 'Series',
      title: 'Sarkar',
      client: 'Zee TV / Siddhant Cinevision',
      credit: 'Dir. Pushpendra Singh',
      year: '2005-2006',
      genre: 'Political Thriller / Dynastic Drama',
      director: 'Pushpendra Singh',
      studio: 'Zee TV & Siddhant Cinevision',
      milestone: 'Critically Acclaimed Shobhaa De Political Drama',
      img: '/assets/images/sarkar.jpg',
      bannerImg: '/assets/images/sarkar.jpg',
      synopsis: 'A gripping political drama serial penned by Shobhaa De exploring power dynamics, electoral stratagems, and backroom political betrayals within a prominent political dynasty headed by matriarch Priyamvada.',
      stills: [
        { img: '/assets/images/sarkar.jpg', title: 'Political Matriarch Priyamvada in Heated Debate', tag: '1280x720 HD Broadcast' },
        { img: '/assets/images/bts_camera_rig.jpg', title: 'Siddhant Cinevision Political Chamber Lighting', tag: 'Studio Rig' }
      ],
      cast: [
        { actor: 'Rajat Kapoor', character: 'Kumar', role: 'Political Strategist', img: '/assets/images/cast/rajat_kapoor.jpg' },
        { actor: 'Ronit Roy', character: 'Kunal', role: 'Dynastic Scion', img: '/assets/images/cast/ronit_roy.jpg' },
        { actor: 'Rohit Roy', character: 'Karan', role: 'Ambitious Younger Brother', img: '/assets/images/cast/rohit_roy.jpg' },
        { actor: 'Tisca Chopra', character: 'Shweta', role: 'Political Confidante', img: '/assets/images/cast/tisca_chopra.jpg' },
        { actor: 'Divya Seth', character: 'Priyamvada', role: 'Political Matriarch & Kingmaker' }
      ],
      videoUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1'
    },
    {
      id: 15,
      cat: 'Series',
      title: 'Kyaa Hoga Nimmo Kaa',
      client: 'STAR One / Balaji Telefilms',
      credit: 'Associate Dir. Pushpendra Singh',
      year: '2006-2007',
      genre: 'Romantic Comedy / Slice-of-Life',
      director: 'Associate Dir. Pushpendra Singh',
      studio: 'STAR One & Balaji Telefilms',
      milestone: 'Beloved 200+ Episode Romantic Comedy',
      img: '/assets/images/kyaa_hoga_nimmo_kaa.jpg',
      bannerImg: '/assets/images/kyaa_hoga_nimmo_kaa.jpg',
      synopsis: 'A cheerful romantic comedy tracing the life of Nimmo, a charming middle-class girl with perpetual bad luck, whose unexpected arrangement with high-flying billionaire Kunal Sehgal evolves into genuine tenderness.',
      stills: [
        { img: '/assets/images/kyaa_hoga_nimmo_kaa.jpg', title: 'Nimmo & Kunal Sehgal Humorous Moment', tag: '1280x720 HD Broadcast' },
        { img: '/assets/images/bts_film_set.jpg', title: 'Balaji Telefilms Star One Comedy Stage', tag: 'Behind the Scenes' }
      ],
      cast: [
        { actor: 'Sanjeeda Sheikh', character: 'Namrata "Nimmo" Mathuria', role: 'Titular Lead Protagonist', img: '/assets/images/cast/sanjeeda_sheikh.jpg' },
        { actor: 'Eijaz Khan', character: 'Kunal Sehgal', role: 'Billionaire Protagonist', img: '/assets/images/cast/eijaz_khan.jpg' },
        { actor: 'Sanjit Bedi', character: 'Vikrant', role: 'Supporting Lead' },
        { actor: 'Garima Kapoor', character: 'Natasha', role: 'Key Antagonist' },
        { actor: 'Navneet Nishan', character: 'Parminder', role: 'Mother' }
      ],
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
