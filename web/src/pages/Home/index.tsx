import { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import dogs from '../../assets/images/dogs.png'
import search from '../../assets/icons/search.svg'
import arrowBottom from "../../assets/icons/chevron-bottom.svg"

import {
  Container,
  Logo, 
  ContainerInfo, 
  TextInfo, 
  TextDescription, 
  ContainerSearch, 
  ContentSearch, 
  DogsImage 
} from './styles'
import { api } from '@/lib/axios'

interface IEstados  {
  id: number
  sigla: string
  nome: string
}


export function Home() {
  const [loadingStates, setLoadingStates] = useState(false);
  const [estados, setEstados] = useState<IEstados[]>([]);


  function handleSearchPets() {
    // TO DO
  }

  async function handleChangeState() {
    try {
      setLoadingStates(true)

      const response = await api.get("http://localhost:3333/location/states")
      setEstados(response.data.states);
      
      console.log(' ----akiee', response.data.states[2])
    } catch (error) {
      setLoadingStates(false)
      console.log(error)
      throw error
    }
    finally {
      setLoadingStates(false)
    }
  }

  function handleChangeCity() {
    // TO DO
  }

  useEffect(() => {
    handleChangeState()
  }, [])

  return (
    <>
    <Container>

      <ContainerInfo>
        <Logo>
          <img src={logo} alt="logo" />
        
        </Logo>

        <TextInfo> Leve
          a felicidade 
          para o seu lar</TextInfo>

        <TextDescription> Encontre o animal de estimação ideal
          para seu estilo de vida!
        </TextDescription>

      </ContainerInfo>

      <ContainerSearch>

        <DogsImage> <img src={dogs} alt="banner pets" /> </DogsImage>

        <ContentSearch>
          Busque um amigo:

          <select>
           {estados.map((estado) => (
            <option >{estado.nome}</option>
           ))}
            
          </select>
        
          <input type="text" placeholder='Recife' />

          <button>
            <img src={search} alt="ícone de lupa" />
          </button>

        </ContentSearch>

      </ContainerSearch>
  </Container>
    </>
  )
}
