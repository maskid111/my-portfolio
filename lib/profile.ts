export const profile = {
  name: 'Maskid',
  xUsername: 'deft_gfx',
  xHandle: '@deft_gfx',
  telegramHandle: '@iammaskid',
  discordHandle: '@iammaskid',
  email: 'muizadeyemo17@gmail.com',
  title: 'Creator & Blockchain Developer',
  fullTitle:
    'Video Content Creator, Content Writer, Frontend Developer, Blockchain Builder, Graphic Designer, Technical Analyst, Trader',
  tagline: 'Believe in Something',
  mission: 'To become one of the biggest creators and builders on CT.',
  education: 'BSc holder in Computer Science',
  currentProject: 'Consensus Hire',
  currentProjectDescription:
    'AI validator consensus for job matching, candidate evaluation, and hiring recommendations. Built on GenLayer.',
  currentStatuses: ['Available for collaborations', 'Building in public', 'Open to freelance'],
  contactFor: ['Gigs', 'Collaborations', 'Mentorship', 'Training'],
  primarySkills: ['Video Content Creator', 'Content Writer', 'Frontend Developer'],
  secondarySkills: ['Blockchain Builder', 'Graphic Designer', 'Technical Analyst', 'Trader'],
  contentTopics: ['Crypto', 'Blockchain', 'Trading', 'Technical Analysis', 'Frontend Development', 'Web3'],
  socialLinks: {
    github: 'https://github.com/maskid111',
    x: 'https://x.com/deft_gfx',
    telegram: 'https://t.me/iammaskid',
    discord: 'https://discord.com/users/iammaskid',
    email: 'mailto:muizadeyemo17@gmail.com',
    genLayer: 'https://x.com/GenLayer',
  },
  seo: {
    title: 'Maskid | Creator, Web Developer & Blockchain Builder',
    description:
      "Explore Maskid's personal brand: creator, web developer, blockchain builder, and trader turning Web3 ideas into clear content, polished interfaces, and useful products.",
  },
}

export const featuredVideos = [
  'https://x.com/deft_gfx/status/2046236894044786912?s=20',
  'https://x.com/deft_gfx/status/2036124432704458865?s=20',
  'https://x.com/deft_gfx/status/2050512481169146117?s=20',
  'https://x.com/deft_gfx/status/2023746133562994973?s=20',
]

export const featuredThreads = [
  'https://x.com/deft_gfx/status/1958078969535778903?s=20',
  'https://x.com/deft_gfx/status/1957413519692890385?s=20',
  'https://x.com/deft_gfx/status/1962438036785959293?s=20',
  'https://x.com/deft_gfx/status/1958884615659106465?s=20',
  'https://x.com/deft_gfx/status/1959955943745060912?s=20',
  'https://x.com/deft_gfx/status/1978098748912804252?s=20',
]

export const allFeaturedTweets = [
  ...featuredVideos.map((url, index) => ({
    id: `video-${index + 1}`,
    url,
    type: 'Video',
    title: `Featured video ${index + 1}`,
  })),
  ...featuredThreads.map((url, index) => ({
    id: `thread-${index + 1}`,
    url,
    type: 'Thread',
    title: `Featured thread ${index + 1}`,
  })),
]

const projectPreviewUrl = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`

export const developedProjects = [
  {
    name: 'EchoMap',
    description:
      'EchoMap is a decentralized mapping platform that lets users create, store, and own location-based data onchain instead of relying on centralized map providers.',
    technologies: ['Move', 'TypeScript', 'CSS'],
    githubUrl: 'https://github.com/maskid111/EchoMap',
    demoUrl: 'https://echomapxyz.vercel.app/',
    previewImageUrl: projectPreviewUrl('https://echomapxyz.vercel.app/'),
    status: 'Completed',
  },
  {
    name: 'JudgeLayer',
    description:
      'Decentralized AI evaluation protocol. Connect your wallet, submit your project, and receive transparent consensus-based evaluation from GenLayer validators.',
    technologies: ['TypeScript', 'CSS', 'Python'],
    githubUrl: 'https://github.com/maskid111/judgelayer',
    demoUrl: 'https://judgelayer.vercel.app/',
    previewImageUrl: projectPreviewUrl('https://judgelayer.vercel.app/'),
    status: 'Completed',
  },
  {
    name: 'TrustEscrow',
    description: 'A secure, decentralized escrow platform built on TRUST.',
    technologies: ['TypeScript', 'CSS', 'Solidity', 'JavaScript'],
    githubUrl: 'https://github.com/intuition-box/TrustEscrow',
    demoUrl: 'https://trustescrow.intuition.box/',
    previewImageUrl: projectPreviewUrl('https://trustescrow.intuition.box/'),
    status: 'Completed',
  },
  {
    name: 'My Portfolio',
    description: 'Everything about Maskid.',
    technologies: ['TypeScript', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/maskid111/my-portfolio',
    demoUrl: 'https://maskidportfolio.vercel.app/',
    previewImageUrl: projectPreviewUrl('https://maskidportfolio.vercel.app/'),
    status: 'Completed',
  },
  {
    name: 'Seismic Flyer',
    description: 'Seismic flyer maker.',
    technologies: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/maskid111/seismicflyer',
    demoUrl: 'https://seismicflyer.vercel.app/',
    previewImageUrl: projectPreviewUrl('https://seismicflyer.vercel.app/'),
    status: 'Completed',
  },
  {
    name: 'AimabLuxe',
    description:
      'AimabLuxe is an ecommerce website where you can explore premium HD lace wigs designed for effortless elegance.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    githubUrl: 'https://github.com/maskid111/Aimab-Luxe',
    demoUrl: 'https://www.aimabluxe.com/',
    previewImageUrl: projectPreviewUrl('https://www.aimabluxe.com/'),
    status: 'Completed',
  },
  {
    name: 'Malete Hostels',
    description:
      'Discover affordable, comfortable, and secure private hostels with stylish interiors tailored for students across Malete.',
    technologies: ['HTML'],
    githubUrl: 'https://github.com/maskid111/maletehostel',
    demoUrl: 'https://maletehostel.com.ng/',
    previewImageUrl: projectPreviewUrl('https://maletehostel.com.ng/'),
    status: 'Completed',
  },
  {
    name: 'Teamz Adore',
    description:
      'Teamz Adore is an ecommerce website where you can elevate your style with a curated collection of modern fashion for everyone.',
    technologies: ['HTML', 'JavaScript'],
    githubUrl: 'https://github.com/deftgfx/Teamz-Adore',
    demoUrl: 'https://teamzadore.com.ng/',
    previewImageUrl: projectPreviewUrl('https://teamzadore.com.ng/'),
    status: 'Completed',
  },
]
