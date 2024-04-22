'use client'

import { cn } from '@/lib/utils'

type DraggableElementProps = {
  item: { id: string } & Record<string, unknown>
  className?: string
  style?: React.CSSProperties
}

export default function DraggableElement({ item, className, style }: DraggableElementProps) {
  return (
    <div
      className={cn('flex aspect-square items-center justify-center rounded-md border bg-background', className)}
      style={style}
      draggable
    >
      {item.id}
    </div>
  )
}
