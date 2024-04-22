'use client'

import Frame from 'react-frame-component'
import ItemDroppable from './_components/item-droppable'

export default function Page() {
  return (
    <Frame>
      <ItemDroppable className="h-[500px] w-full border" />
    </Frame>
  )
}
