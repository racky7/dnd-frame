'use client'

import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { cn } from '@/lib/utils'
import ItemCard from './item-card'
import ItemDragOverlay from './item-drag-overlay'

type AppShellProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const ITEMS = [
  {
    id: '1',
    name: 'Item 1',
  },
  {
    id: '2',
    name: 'Item 2',
  },
]

export default function AppShell({ children, className, style }: AppShellProps) {
  return (
    <div className={cn('flex h-screen', className)} style={style}>
      <DndContext
        onDragEnd={(event: DragEndEvent) => {
          console.log('on drag end event', event)
        }}
      >
        <div className="flex w-[280px] flex-col overflow-hidden border-r">
          <div className="flex-1 space-x-2 space-y-3 overflow-auto p-3">
            {ITEMS.map((item) => (
              <ItemCard key={item.id} id={item.id} name={item.name} />
            ))}
          </div>
        </div>
        <ItemDragOverlay />
        <div className="relative flex-1">{children}</div>
      </DndContext>
    </div>
  )
}
