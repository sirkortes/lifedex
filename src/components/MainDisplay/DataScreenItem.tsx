interface DataItemProps {
  id: number
  imgUrl: string
  date: string
  type: string
  details: any
  isOpen: boolean
  setSelectedItem: Function
}

function DataScreenItem({ id, imgUrl, date, type, setSelectedItem, isOpen }: DataItemProps) {
  return (
    <div
      key={id}
      onClick={(e) => setSelectedItem(id)}
      className={`flex border-2 border-blue-400 p-2 hover:bg-blue-400 hover:bg-opacity-40 cursor-pointer 
        ${isOpen ? 'bg-blue-400 bg-opacity-50' : ''}`}>
      <img src={imgUrl} alt='entry render' className='min-w-1/5 max-w-1/5 w-1/5 max-h-40 object-cover object-right' />
      <div className='flex flex-auto flex-col pl-4 text-sm'>
        <span>ID: {id + 1}</span>
        <span>{date}</span>
        <span>{type}</span>
      </div>
    </div>
  )
}

export default DataScreenItem
