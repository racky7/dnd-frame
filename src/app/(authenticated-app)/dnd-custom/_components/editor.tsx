'use client'

import FrameComponent from 'react-frame-component'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import DraggableElement from './draggable-element'
import DroppableElement from './droppable-element'
import { useInjectStyles } from '@/hooks/use-inject-styles'

/**
 * 1. Draggable
 * 2. Droppable
 * 3. Custom drag overlay
 */

const ITEMS = Array.from({ length: 10 }, (_, i) => i).map((i) => ({
  id: i.toString(),
}))

export default function Editor() {
  const injectStyles = useInjectStyles()

  return (
    <div className="flex h-screen divide-x overflow-hidden">
      <div className="w-[320px] overflow-auto">
        <div className="grid grid-flow-row-dense grid-cols-2 items-center gap-4 p-4">
          {ITEMS.map((item) => (
            <DraggableElement key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <FrameComponent
          className="h-full w-full"
          initialContent={`<!DOCTYPE html><html class="${GeistMono.variable} ${GeistSans.variable}"><head>${injectStyles}</head><body><div></div></body></html>`}
        >
          <div className="space-y-2 p-2">
            <DroppableElement item={{ id: 'droppable-0' }} />
            <DroppableElement item={{ id: 'droppable-1' }} />
          </div>
        </FrameComponent>
      </div>
    </div>
  )
}
