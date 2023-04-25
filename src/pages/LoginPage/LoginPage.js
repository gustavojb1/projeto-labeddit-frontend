import React, { useEffect, useState } from 'react'
import axios from "axios";
import { CentraliseContainer, Container, CreateButton, Form, LogoContainer, LogoImg, SecondaryTittle, Separator, Title } from "./styled";
import group from '../../img/group.png'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import useForm from '../../hooks/useForm';
import { BASE_URL } from '../../utils/baseUrl';
import { goToHomePage } from '../../routes/coordinator';
import { useNavigate } from "react-router-dom";
import useLocalStorage from '../../hooks/useLocalStorage';
import { goToSignupPage } from '../../routes/coordinator';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, onChange] = useForm({ email: "", password: "" });
  const [token, setToken] = useLocalStorage('token-labeddit', '')
  const [userId, setUserId] = useLocalStorage('user-id-labeddit', '')

  const navigate = useNavigate();

  const checkToken = async () => {
    try {
      if (token) {
        const response = await axios.get(BASE_URL + `/users/verify-token/${token}`);
        if (response.data.isTokenValid) {
          setIsLoading(false);
          goToHomePage(navigate);
        }
      }
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  useEffect(() => {
    checkToken()
  }, [token])

  const login = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      setIsLoading(true);

      const body = {
        email: form.email,
        password: form.password
      }

      const response = await axios.post(BASE_URL + "/users/login", body);
      setToken(response.data.token)
      setUserId(response.data.userId)



    } catch (error) {
      setIsLoading(false);
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  function onClickSignup() {
    goToSignupPage(navigate)
  }

  return (
    <CentraliseContainer>
      <Container>
        <LogoContainer>
          <LogoImg src={group} />
        </LogoContainer>
        <Title>
          LabEddit
        </Title>
        <SecondaryTittle>
          O projeto de rede social da Labenu
        </SecondaryTittle>

        <Form onSubmit={login}>
          <PrimaryInput
            placeholder={'E-mail'}
            id={"email-login"}
            name={"email"}
            type={"email"}
            value={form.email}
            handleChange={onChange}
          />
          <PrimaryInput
            placeholder={'Senha'}
            id={"password-login"}
            name={"password"}
            type={"password"}
            value={form.password}
            handleChange={onChange} />
          <PrimaryButton
            marginTop='58px'
            type='submit'
          >Continuar</PrimaryButton>
        </Form>
        <Separator />
        <CreateButton
        onClick={onClickSignup}
        >Criar Conta</CreateButton>
      </Container>
      {isLoading && <LoadingModal />}
    </CentraliseContainer>

  )
}

export default LoginPage