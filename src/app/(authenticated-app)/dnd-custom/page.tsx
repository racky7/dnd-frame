import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('./_components/editor'), { ssr: false })

export default function DnDCustom() {
  return <Editor />
}
