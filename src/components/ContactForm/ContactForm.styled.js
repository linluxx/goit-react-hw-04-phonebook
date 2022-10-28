import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 20px;
  font-family: ${p => p.theme.font.main};
  font-size: 17px;
`;

const Input = styled.input`
  margin-left: 7px;
  height: 30px;
  border-radius: 12px;
  border-color: ${p => p.theme.colors.dark};
  outline: none;
  padding: 0 5px 0 7px;
  font-family: ${p => p.theme.font.main};

  font-size: 15px;
  color: ${p => p.theme.colors.dark};
  transition: all 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 5px ${p => p.theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  height: 30px;
  border-radius: 12px;
  outline: none;
  padding: 0 20px 0 20px;
  color: ${p => p.theme.colors.dark};
  background-color: ${p => p.theme.colors.accent};
  transition: all 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 5px ${p => p.theme.colors.accent};
  }
`;

export { Form, Label, Input, SubmitButton };
