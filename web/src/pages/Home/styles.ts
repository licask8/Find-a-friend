import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
 flex-direction: row;
 background-color: #F15156;
 padding-left: 113px;
 height:100vh;
 gap: 136px;
`;

 export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 487px;
  height: 100%;
  padding-top: 75px;
  
 

`;


export const Logo = styled.div`
 width: 215px;
 height: 56px;

`;

export const TextInfo = styled.text`
 font-size: 72px;
 font-weight: 800;
 line-height: 64.8px;
`;

export const TextDescription = styled.text`
 margin-bottom: 100px;
 font-size: 24px;
 font-weight: 600;
 line-height: 34px;
 color: #ffffff
`;


export const ContainerSearch = styled.div`
 display: flex;
 flex-direction: column;
 
 width: 487px;
 height: 100%;

`;

export const DogsImage = styled.image`
 display: flex;
 margin-top: 120px;
  
`;

export const ContentSearch = styled.div`
 display: flex;
 margin-top: 126px;
 width: 600px;
 align-items: center;
 gap: 23px;

 select {
    width: 72px;
    height: 72px;
    font-size: 16px;
    font-weight: bold;
    background-color: #E44449;
    padding: 10px 10px;
    border-radius: 15px;
    border: 1px solid #fff;
    color: #fff;
    text-align: center;

    outline: none;

  }
  
  select:nth-child(2) {
    width: 200px;
    border: none;
    text-align: center;
  }
  

  button {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #f4d35e;
    border: none;
    border-radius: 20px;
    transition: filter 0.2s;

    img {
      width: 22px;
    }

    :hover {
      filter: brightness(0.9);
    }
  }
  
`;



