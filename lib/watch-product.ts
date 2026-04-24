export interface WatchTimelineStage {
  eyebrow: string
  title: string
  copy: string
  details: string[]
  cta?: string
}

export interface WatchStoryProduct {
  slug: string
  name: string
  collection: string
  priceLabel: string
  tileImageSrc: string
  videoSrc: string
  posterSrc: string
  shortDescription: string
  specs: {
    material: string
    stones: string
    dial: string
    movement: string
    bracelet: string
  }
  stages: WatchTimelineStage[]
  snapPoints: number[]
}

export const icedRomanDiamondWatch: WatchStoryProduct = {
  slug: 'iced-roman-diamond-watch',
  name: 'Iced Roman Diamond Watch',
  collection: 'Signature Jewelry Watch',
  priceLabel: 'Availability on request',
  tileImageSrc: '/media/iced-roman-watch-tile.svg',
  videoSrc: '/media/iced-roman-watch-assembly.mp4',
  posterSrc: '/media/iced-roman-watch-tile.svg',
  shortDescription:
    'A fully iced luxury timepiece with a diamond-set bezel, Roman numeral dial, and polished gold-tone detailing.',
  specs: {
    material: 'Polished two-tone jewelry finish',
    stones: 'Diamond-set bezel, case, dial, and bracelet',
    dial: 'Roman numeral diamond dial with date aperture',
    movement: 'Precision quartz movement',
    bracelet: 'Two-tone pavé link bracelet',
  },
  snapPoints: [0, 0.34, 0.68, 1],
  stages: [
    {
      eyebrow: 'Stage 01',
      title: 'Presence From Every Angle',
      copy:
        'A fully iced timepiece designed to hold light with quiet authority. The case, bracelet, and dial are composed as one continuous field of brilliance.',
      details: ['Diamond-set bezel and case', 'Roman numeral dial', 'Gold-tone hands and markers'],
      cta: 'View Details',
    },
    {
      eyebrow: 'Stage 02',
      title: 'Construction In Motion',
      copy:
        'Scroll into the build and the watch separates with intention, revealing how each surface is layered, set, and brought back into alignment.',
      details: ['Pavé bracelet links', 'Polished gold-tone architecture', 'Two-tone jewelry-watch finish'],
      cta: 'Add to Collection',
    },
    {
      eyebrow: 'Stage 03',
      title: 'Set For Brilliance',
      copy:
        'The bezel, dial, and case are treated as a single jewelry surface. Roman markers add contrast while the diamond field keeps the piece luminous.',
      details: ['Diamond-set dial', 'Stone-set bezel', 'Date aperture with framed window'],
      cta: 'Request Availability',
    },
    {
      eyebrow: 'Stage 04',
      title: 'A Final Clean State',
      copy:
        'The mechanism resolves into a complete statement: precise, polished, and built for presence without needing to announce itself.',
      details: ['Premium jewelry-watch styling', 'Balanced bracelet profile', 'Finished for formal and evening wear'],
      cta: 'Request Availability',
    },
  ],
}
