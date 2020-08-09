import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  #search-teachers {
    margin-top: 3.2rem;
    > button {
      width: 100%;
      height: 5.6rem;
      background: var(--color-secundary);
      color: var(--color-button-text);
      border: 0;
      border-radius: .8rem;
      cursor: pointer;
      font: 700 1.6rem Archivo;

      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all .2s;
      margin-top: 3.2rem;

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }
  #search-teachers label {
    color: var(--color-text-in-primary);
  }
  

  
  @media (min-width: 700px) {
    width: 100%;

    #search-teachers {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;

      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }

    #search-teachers .input-block + .input-block {
      margin-top: 0;
    }
  }
`;

export const Content = styled.main`
  margin: 3.2rem auto;
  width: 90%;
  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;

  }
`
