'use client'

import { cn } from '@/lib/utils'
import { useDndContext } from '../_context/dnd-context'

type DroppableElementProps = {
  item: { id: string } & Record<string, unknown>
  className?: string
  style?: React.CSSProperties
}

export default function DroppableElement({ item, className, style }: DroppableElementProps) {
  const { droppableId } = useDndContext()

  const isOver = droppableId === item.id

  return (
    <div
      className={cn(
        isOver
          ? 'h-auto rounded-md border border-dashed bg-primary p-2 text-center text-xs text-primary-foreground'
          : 'h-0',
        className,
      )}
      data-droppable-id={item.id}
      style={style}
    >
      {isOver ? 'Drop here' : null}
    </div>
  )
}
