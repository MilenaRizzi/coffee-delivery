import styled from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 544px;
  padding: 5.87rem 10rem;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  position: relative;

img#hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  max-height: 544px;
  width: 100%;
  object-fit: cover;
}
`;

export const HeroContent = styled.div`
  display: flex;
  gap: 56px;
  align-items: flex-start;
  justify-content: space-between;

  img#coffe{
    z-index: 1;
  }
`
export const Title = styled.div`
  margin-bottom: 4.125rem;
  width: 588px;
 
  h1 {
    margin-bottom: 1rem;
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    line-height: 4rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

export const IconBase = styled.div`
  /* conferir depois se vou deixar px ou transformar para rem  */
  width: 32px;
  height: 32px;
  padding: 0.5rem;
  border-radius: 100%;
`;

export const InfosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;

  > svg {
      padding: 8px;
      border-radius: 999px;
    }
`;