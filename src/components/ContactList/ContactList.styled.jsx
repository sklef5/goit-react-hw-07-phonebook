import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 0px;
  margin-left: auto;
  margin-right: auto;
  display:inline-block;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 20px;

`;
export const Button = styled.button`
  width: 120px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: grey;
  color: black;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
    scale: 1.05;
    font-weight: 600;
    box-shadow: 1px 1px 2px black;
  }
`;

export const Block = styled.div`
  margin-right:30px;
`
export const Img = styled.img`
border-radius:50%;
margin-right:15px;
`