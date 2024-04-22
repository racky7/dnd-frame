'use client'

import { useDroppable } from '@dnd-kit/core'
import { useId } from 'react'

export default function ItemDroppable({ className }: { className: string }) {
  const id = useId()

  const { setNodeRef, isOver } = useDroppable({
    id: `item-droppable-${id}`,
  })
  return (
    <div ref={setNodeRef} data-is-over={isOver} className={className}>
      {isOver ? <div>Drop here to add item</div> : null}
    </div>
  )
}
