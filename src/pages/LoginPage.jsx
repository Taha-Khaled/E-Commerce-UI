import { mobile } from "../responsive";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 10px 0;
  border: 1px solid lightgray;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  margin: 10px 0;
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
const Link = styled.a`
  margin: 10px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>Don't Remember Your Password? </Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
