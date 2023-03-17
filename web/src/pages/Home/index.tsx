import logo from '../../assets/images/logo.png'
import dogs from '../../assets/images/dogs.png'
import search from '../../assets/icons/search.svg'
import { useEstados } from '@/hooks/useEstados'
import { useCidades } from '@/hooks/useCidades'
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
import { useState } from 'react'


export function Home() {
  const { estados } = useEstados();
  const [selectedEstado, setSelectedEstado] = useState('')
  const { cidades, loading: loadingCidades } = useCidades({uf: selectedEstado});

  

  function handleSearchPets() {
    // TO DO
  }

  async function handleChangeState(event:any) {
    setSelectedEstado(event.target.value)
  }

  function handleChangeCity() {
    // TO DO
    
  }

  return (
  <>
    <Container>

      <ContainerInfo>
        <Logo>
          <img src={logo} alt="logo" />
        
        </Logo>

        <TextInfo> Leve <br/>
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

          <select value={selectedEstado} onChange={handleChangeState}>
            {estados.map((estado) => (
              <option key={estado.id} value={estado.sigla} >{estado.sigla}</option>
            ))}
          </select>

          {loadingCidades ? <p>Carregando...</p> : (
             <select>
             {cidades.map((cidade) => (
               <option key={cidade.code} value={cidade.name} >{cidade.name}</option>
             ))}
           </select>
          )}

          <button onClick={handleChangeCity}>
            <img src={search} alt="ícone de lupa" />
          </button>

        </ContentSearch>

      </ContainerSearch>
    </Container>
  </>
  )
}
