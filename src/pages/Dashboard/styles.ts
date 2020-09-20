import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const AlgoVisualizer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #252733;
  align-items: center;
  justify-content: center;
`;

export const AlgoTitle = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 70px;
    color: #fff;
  }
`;

export const AlgoContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

export const AlgoProperties = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;

  > div {
    min-height: 50px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    p {
      text-align: right;
      width: 100px;
      margin-right: 30px;
      color: #fff;
      font-size: 20px;
    }

    strong {
      text-align: left;
      width: 50px;
      margin-left: 30px;
      color: #fff;
      font-size: 20px;
    }
  }
`;

export const InputRange = styled.input`
  width: 700px;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  -webkit-appearance: none;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #0000ff;
    cursor: pointer;
  }
`;

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #363740;
  width: 150px;
  justify-content: flex-end;
  align-items: center;

  button {
    cursor: pointer;
    margin-bottom: 20px;
    border: 0;
    width: 100px;
    height: 100px;
    color: #a4a6b3;
    background-color: transparent;

    svg {
      width: 80%;
      height: 80%;
    }
  }
`;
