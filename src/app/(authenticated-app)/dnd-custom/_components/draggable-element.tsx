'use client'

import { cn } from '@/lib/utils'
import { useDndContext } from '../_context/dnd-context'

type DraggableElementProps = {
  item: { id: string } & Record<string, unknown>
  className?: string
  style?: React.CSSProperties
}

export default function DraggableElement({ item, className, style }: DraggableElementProps) {
  const { setDraggableId } = useDndContext()

  return (
    <div
      className={cn('flex aspect-square items-center justify-center rounded-md border bg-background', className)}
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
