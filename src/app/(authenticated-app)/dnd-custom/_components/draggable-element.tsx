'use client'

import { cn } from '@/lib/utils'
import { useDndContext } from '../_context/dnd-context'

type DraggableElementProps = {
  item: { id: string } & Record<string, unknown>
  className?: string
  style?: React.CSSProperties
}

export default function DraggableElement({ item, className, style }: DraggableElementProps) {
  const { handleDrag: setDraggableId } = useDndContext()

  return (
    <div
      className={cn('flex aspect-square items-center justify-center rounded-md border bg-background', className)}
      data-draggable-id={item.id}
      style={style}
      draggable
      onDragStart={() => {
        setDraggableId(item.id)
      }}
      onDragEnd={() => {
        setDraggableId(undefined)
      }}
    >
      {item.id}
    </div>
  )
}
