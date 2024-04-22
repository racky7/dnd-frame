'use client'

import { cn } from '@/lib/utils'
import { useDndContext } from '../_context/dnd-context'

type DroppableElementProps = {
  item: { id: string } & Record<string, unknown>
  className?: string
  style?: React.CSSProperties
}

export default function DroppableElement({ item, className, style }: DroppableElementProps) {
  const { droppableId, setDroppableId } = useDndContext()

  return (
    <div
      className={cn(
        'rounded-md border border-dashed p-2 text-center text-xs text-muted-foreground',
        droppableId === item.id ? 'bg-primary text-primary-foreground' : undefined,
        className,
      )}
      style={style}
      onDragEnter={() => {
        setDroppableId(item.id)
      }}
      onDragLeave={() => {
        setDroppableId(undefined)
      }}
    >
      Drop element to add
    </div>
  )
}
