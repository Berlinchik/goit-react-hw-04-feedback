import styled from 'styled-components';

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  height: 30px;
  width: 100px;
  border-color: transparent;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background-color: lightgray;
  }
`;
