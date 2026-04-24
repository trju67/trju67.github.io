import { notFound } from 'next/navigation'
import WatchDetailExperience from '@/components/watch/WatchDetailExperience'
import { icedRomanDiamondWatch } from '@/lib/watch-product'

interface WatchPageProps {
  params: {
    slug: string
  }
}

export default function WatchPage({ params }: WatchPageProps) {
  if (params.slug !== icedRomanDiamondWatch.slug) {
    notFound()
  }

  return <WatchDetailExperience product={icedRomanDiamondWatch} />
}
