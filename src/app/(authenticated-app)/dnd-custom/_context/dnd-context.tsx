import { createContext, useCallback, useContext, useEffect, useState } from 'react'

type DndContextState = {
  draggableId?: string
  droppableId?: string
  handleDrag: (id?: string) => void
  handleDrop: (id?: string) => void
}

export const DndContext = createContext<DndContextState>({
  draggableId: undefined,
  droppableId: undefined,
  handleDrag: () => {},
  handleDrop: () => {},
})

export function DndContextProvider({ children }: React.PropsWithChildren) {
  const [draggableId, setDraggableId] = useState<string | undefined>(undefined)
  const [droppableId, setDroppableId] = useState<string | undefined>(undefined)

  useEffect(
    function listenerForMouseMove() {
      function handleMouseMove(event: MouseEvent) {
        console.log('hello world')
        console.log(event.clientX, event.clientY)
        /**
         * Calculate valid droppables
         * 1. Get the BCR of the canvas-container
         * 2. Calculate rectangular intersection of pointer and canvas-container
         * 3. If the rectangular intersection is not empty, then the dragged element is over the canvas-container
         * 5. Calcuate the closest droppable element to the dragged element by calculating the distance between
         *    their center of droppables and pointer position
         * 6. Calculate the nearest droppable element to the dragged element by getting the min distance of all droppables
         * 7. Show that as the active droppable
         *
         *
         * function rectangularIntersection(pointerPosition: {x: number, y: number}, b: DOMRect): bool {}
         *
         * function calculateCenterCenterDistance(pointerPosition: {x: number, y: number}, b: DOMRect): number {
         * }
         * 1. Add window mouse move event listener when the draggableId is set
         * 2. Calculate the pointer position on the canvas-container
         *
         */
      }

      if (draggableId) {
        window.addEventListener('mousemove', handleMouseMove)
      }

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    },
    [draggableId],
  )

  const handleDrag = useCallback((id?: string) => {
    setDraggableId(id)
  }, [])

  return (
    <DndContext.Provider
      value={{
        draggableId,
        droppableId,
        handleDrag,
        handleDrop: setDroppableId,
      }}
    >
      {children}
    </DndContext.Provider>
  )
}

export function useDndContext() {
  return useContext(DndContext)
}
