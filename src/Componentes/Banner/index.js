import styled from 'styled-components';

const BannerContainer = styled.section`
  width: 100vw;
  padding: 0;
  margin: 0;
  
  & img{
    width: 100%;
  }
  
`;

function Banner() {
  return(
      <BannerContainer>
        <img src="./img/banner.png" alt="Banner organo" />
      </BannerContainer>
    )
}

export default Banner;