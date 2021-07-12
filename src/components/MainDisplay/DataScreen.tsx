import DataScreenItem from './DataScreenItem'

interface DataScreenProps {
  selectedEntry: number | null
  setSelectedEntry: Function
}

function DataScreen({ selectedEntry, setSelectedEntry }: DataScreenProps) {
  const mockdata = [
    {
      date: '7/9/2021, 5:40:55 PM',
      imgUrl:
        'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      type: 'person',
      details: []
    },
    {
      date: '7/9/2021, 5:40:55 PM',
      imgUrl:
        'https://images.pexels.com/photos/6679462/pexels-photo-6679462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      type: 'item',
      details: []
    },
    {
      date: '7/9/2021, 5:40:55 PM',
      imgUrl:
        'https://images.pexels.com/photos/3671082/pexels-photo-3671082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: 'person',
      details: []
    },
    {
      date: '7/9/2021, 5:40:55 PM',
      imgUrl:
        'https://images.pexels.com/photos/7564119/pexels-photo-7564119.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      type: 'person',
      details: []
    },
    {
      date: '7/9/2021, 5:40:55 PM',
      imgUrl: 'https://images.pexels.com/photos/944740/pexels-photo-944740.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      type: 'item',
      details: []
    },
    {
      date: '7/9/2021, 5:40:55 PM',
      imgUrl:
        'https://images.pexels.com/photos/6015909/pexels-photo-6015909.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      type: 'person',
      details: []
    },
    {
      date: '7/9/2021, 5:40:55 PM',
      imgUrl:
        'https://images.pexels.com/photos/4495760/pexels-photo-4495760.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      type: 'item',
      details: []
    },
    {
      date: '7/9/2021, 5:40:55 PM',
      imgUrl:
        'https://images.pexels.com/photos/2471259/pexels-photo-2471259.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: 'item',
      details: []
    },
    {
      date: '7/9/2021, 5:40:55 PM',
      imgUrl:
        'https://images.pexels.com/photos/6420248/pexels-photo-6420248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: 'dog',
      details: []
    }
  ]
  return (
    <div className='flex-auto flex-col justify-between p-2 font-mono text-blue-500 text-opacity-60 overflow-auto space-y-2'>
      {/* List of data items, figure out navigation to item page later */}
      <div className='flex flex-col flex-auto justify-start align-top space-y-4 pr-2'>
        {mockdata.map((item, id) => (
          <DataScreenItem key={id} {...item} id={id} isOpen={selectedEntry === id} setSelectedItem={setSelectedEntry} />
        ))}
      </div>
    </div>
  )
}

export default DataScreen
