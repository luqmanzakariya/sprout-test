import { useState, Suspense } from 'react'
import './App.css'
import Loader from './components/Loader'
import useGetListPokemons from './api/fetchListPokemon'
import Card from './components/Card'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [selectedData, setSelectedData] = useState({})
  const { isFetching: loadingPokemons, data} = useGetListPokemons()

  const handleShowModal = (data) => {
    if (data){
      setSelectedData(data)
    } else {
      setSelectedData({})
    }
    setShowModal(!showModal)
  }

  if (loadingPokemons){
    return <div>Loading...</div>
  }

  return (
    <Suspense fallback={<Loader />}>
      <Modal show={showModal} data={selectedData} onClose={handleShowModal} />
      <div className='pokedex-icon'>
        <img src='pokedex-logo.png' />
      </div>
      <div className='container'>
        {data?.map((val:any) => <Card key={val.id} details={val} handleClick={handleShowModal}/>)}
      </div>
    </Suspense>
  )
}

export default App
