import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PetList from './components/PetList'
import FilterForm from './components/FilterForm'

function App() {
  const [pets, setPets] = useState([])
  const [filterPets, setFilterPets] = useState([])
  const [filter, setFilter] = useState({
    tipo: '',
    estado: '',
    edad: '',
    genero: '',
  })

  const [options, setOptions] = useState({
    tipo: [],
    estado: [],
    edad: [],
    genero: [],
  })
 
  useEffect(() => {
    async function fetchPets() {
      const response = await fetch('https://huachitos.cl/api/animales')
      const data = await response.json()
      setPets(data.data)
      setOptions({
        tipo: [...new Set(data.data.map((pet) => pet.tipo))],
        estado: [...new Set(data.data.map((pet) => pet.estado))],
        edad: [...new Set(data.data.map((pet) => pet.edad))],
        genero: [...new Set(data.data.map((pet) => pet.genero))],
      })

      console.log(data.data)
    }
    fetchPets()
    console.log('fetching pets...')
  }, [])

  useEffect(() => {
    const filtered = pets.filter((pet) => {
      return (
        (filter.tipo === '' || pet.tipo === filter.tipo) &&
        (filter.estado === '' || pet.estado === filter.estado) &&
        (filter.edad === '' || pet.edad === filter.edad) &&
        (filter.genero === '' || pet.genero === filter.genero)
      )
    })
    setFilterPets(filtered)
  }, [filter, pets])

  function handleChange(newFilter) {
    setFilter(newFilter)
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <FilterForm onFilterChange={handleChange} options={options} />
      <ul>
        <PetList pets={filterPets} />
      </ul>
    </>
  )
}

export default App



