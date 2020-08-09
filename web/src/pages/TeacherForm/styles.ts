import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  header {
    margin-bottom: 6.4rem;
  }
@media(min-width: 700px) {
  max-width: 100vw;
  header {
    margin-bottom: 0;
  }
}
`;
export const Content = styled.main`
  background-color: var(--color-box-base);
  > label {
    color: var(--color-text-complement);
  }
  width: 100%;
  max-width: 74rem;

  border-radius: .8rem;

  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  > form fieldset {
    border: 0;
    padding: 0 2.4rem;
    margin-top: 1.6rem;
    >legend {
      font: 700 2.4rem Archivo;
      color: var(--color-text-title);
      margin-bottom: 2.4rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);

      > button {
        background: none;
        border: 0;
        color: var(--color-primary);
        font: 700 1.6rem Archivo;
        cursor: pointer;
        transition: color .2s;

        &:hover {
          color: var(--color-primary-dark);
        }
      }
    }
  }
  > field-set + fieldset {
    margin-top: 6.4rem;
  }

  > form footer {
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;

    > p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;

      line-height: 2.4rem;
      color: var(--color-text-complement);

      > img {
        margin-right: 2rem;
      }
    }
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

  @media (min-width: 700px) {
    
    > form fieldset {
      padding: 0 6.4rem;

    }
    .schedule-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1.6rem;
    }
    > form footer {
      padding: 4rem 6.4rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      > p {
        justify-content: space-between;
      }
      > button {
        width: 20rem;
        margin-top: 0;
      }
    }
  }
`