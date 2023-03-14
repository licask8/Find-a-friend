import { Container, Logo, ContainerInfo, TextInfo, TextDescription, ContainerSearch, ContentSearch, DogsImage } from './styles'
import logo from '../../assets/images/logo.png'
import dogs from '../../assets/images/dogs.png'
import search from '../../assets/icons/search.svg'
import arrowBottom from "../../assets/icons/chevron-bottom.svg"

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <Container>
      <ContainerInfo>
        <Logo>
          <img src={logo} alt="logo" />
        
        </Logo>

        <TextInfo> Leve
           a felicidade 
           para o seu lar</TextInfo>

        <TextDescription> Encontre o animal de estimação ideal
           para seu estilo de vida! </TextDescription>

      </ContainerInfo>

      <ContainerSearch>
        <DogsImage><img src={dogs} alt="" /> </DogsImage>

        <ContentSearch>
          Busque um amigo:

          <button>
            PE
            <img src={arrowBottom} alt="seta para baixo" />
          </button>

          <input type="text" placeholder='Recife' />

          <button>
            <img src={search} alt="ícone de lupa" />
          </button>
         

        </ContentSearch>

      </ContainerSearch>
      
    </Container>)
}
