import styled from 'styled-components';
const FilterInput = styled.input`
  margin-left: 7px;
  height: 30px;
  border-radius: 12px;
  border-color: ${p => p.theme.colors.dark};
  outline: none;
  padding: 0 5px 0 7px;
  font-family: ${p => p.theme.font.main};
  font-size: 15px;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.dark};
  transition: all 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 5px ${p => p.theme.colors.accent};
  }
`;

const FilterLabel = styled.label`
  margin-right: 20px;
  font-family: ${p => p.theme.font.main};
  font-size: 17px;
`;
export { FilterInput, FilterLabel };
