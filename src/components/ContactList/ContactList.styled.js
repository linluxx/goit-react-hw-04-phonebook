import styled from 'styled-components';

const ContactsList = styled.ul``;
const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${p => p.theme.font.main};
  font-weight: 700;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 7px;
  background-color: ${p => p.theme.colors.accent};

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const ContactName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 7px;
    width: 23px;
    height: 23px;
    color: ${p => p.theme.colors.dark};
  }
`;
const ContactNumber = styled.span`
  margin-right: 20px;
`;
const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  height: 27px;
  border-radius: 12px;
  outline: none;
  padding: 0 15px 0 15px;
  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.dark};
  transition: all 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 5px ${p => p.theme.colors.dark};
  }
`;

export { ContactName, ContactNumber, ContactsItem, ContactsList, DeleteButton };
