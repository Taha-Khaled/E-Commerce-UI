import { mobile } from "../responsive";
import styled from "styled-components";
import _BACKGROUND from "../assits/register1.jpg";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 168, 168, 0.5)
    ),
    url(${_BACKGROUND}) center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 20px 10px 0 0;
  border: 1px solid lightgray;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  border: 2px solid teal;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: teal;
  }
  ${mobile({ width: "100%" })}
`;

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create New Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="E-Mail" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            I agree that My information is used to allow me to sign in securely
            and access my data. <br />
            We records certain usage data for security, support, and reporting,
            <b>privacy policy</b>
          </Agreement>
          <Button>Create an account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
