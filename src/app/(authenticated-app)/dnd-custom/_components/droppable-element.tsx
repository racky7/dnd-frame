'use client'

import { cn } from '@/lib/utils'

type DroppableElementProps = {
  item: { id: string } & Record<string, unknown>
  className?: string
  style?: React.CSSProperties
}

export default function DroppableElement({ item, className, style }: DroppableElementProps) {
  return (
    <div
      className={cn('rounded-md border border-dashed p-2 text-center text-xs text-muted-foreground', className)}
      style={style}
      onDragEnter={() => {
        console.log('entering', item.id)
      }}
      onDragLeave={() => {
        console.log('leaving', item.id)
      }}
    >
      Drop element to add
    </div>
  )
}
