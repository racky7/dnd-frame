import { useDraggable } from '@dnd-kit/core'

type ItemCardProps = {
  id: string
  name: string
}

export default function ItemCard({ id, name }: ItemCardProps) {
  const { setNodeRef, listeners, attributes } = useDraggable({
    id: `item-card-${id}`,
    data: {
      type: 'item-card',
      item: { id, name },
    },
  })

  return (
    <button key={id} ref={setNodeRef} className="h-28 w-28 rounded-md border" {...listeners} {...attributes}>
      {name}
    </button>
  )
}
