import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 700px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.font.main};
  font-size: 40px;
  margin-bottom: 20px;
  svg {
    height: 25px;
    width: 40px;
    color: ${p => p.theme.colors.dark};
  }
`;

const ContactsTitle = styled.h2`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.font.main};
  font-size: 30px;
  margin-bottom: 15px;
  svg {
    height: 23px;
    width: 40px;
    margin-right: 3px;
    color: ${p => p.theme.colors.dark};
  }
`;

export { Container, Title, ContactsTitle };
