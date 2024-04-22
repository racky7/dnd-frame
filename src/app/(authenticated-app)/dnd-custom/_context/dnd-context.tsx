import { createContext, useContext, useState } from 'react'

type DndContextState = {
  draggableId?: string
  droppableId?: string
  setDraggableId: (id?: string) => void
  setDroppableId: (id?: string) => void
}

export const DndContext = createContext<DndContextState>({
  draggableId: undefined,
  droppableId: undefined,
  setDraggableId: () => {},
  setDroppableId: () => {},
})

export function DndContextProvider({ children }: React.PropsWithChildren) {
  const [draggableId, setDraggableId] = useState<string | undefined>(undefined)
  const [droppableId, setDroppableId] = useState<string | undefined>(undefined)

  return (
    <DndContext.Provider
      value={{
        draggableId,
        droppableId,
        setDraggableId,
        setDroppableId,
      }}
    >
      {children}
    </DndContext.Provider>
  )
}

export function useDndContext() {
  return useContext(DndContext)
}
