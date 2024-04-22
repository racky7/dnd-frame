import { DragOverlay, useDndContext } from '@dnd-kit/core'

export default function ItemDragOverlay() {
  const { active } = useDndContext()

  return (
    <DragOverlay>
      <button className="h-28 w-28 rounded-md border">{active?.data?.current?.item?.name}</button>
    </DragOverlay>
  )
}
