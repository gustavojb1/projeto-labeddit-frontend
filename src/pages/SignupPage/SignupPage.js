import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import { CentraliseContainer, CheckBox, Container, Form, Label, Link, Span, Tittle } from './styled'
import PrimaryInput from '../../components/PrimaryInput/PrimaryInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import useForm from '../../hooks/useForm'
import useLocalStorage from '../../hooks/useLocalStorage'
import axios from 'axios'
import { BASE_URL } from '../../utils/baseUrl'
import { goToHomePage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {

  const [form, onChange] = useForm({ username: "", email: "", password: "" });
  const [token, setToken] = useLocalStorage('token-labeddit', '')
  const [userId, setUserId] = useLocalStorage('user-id-labeddit', '')

  const navigate = useNavigate();


  const checkToken = async () => {
    try {
      if (token) {
        const response = await axios.get(BASE_URL + `/users/verify-token/${token}`);
        if (response.data.isTokenValid) {
          goToHomePage(navigate);
        }
      }
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  }

  useEffect(() => {
    checkToken();
  }, []);


  const signup = async (event) => {
    event.preventDefault();

    try {
      const body = {
        username: form.username,
        email: form.email,
        password: form.password,
        receiveEmails: true
      }

      const response = await axios.post(BASE_URL + "/users/signup", body);
      setToken(response.data.token)
      setUserId(response.data.userId)

      goToHomePage(navigate);
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  }


  return (
    <>
      <Header />
      <CentraliseContainer>
        <Container>
          <Tittle>
            Olá, boas vindas ao LabEddit ;)
          </Tittle>
          <Form onSubmit={signup}>
            <PrimaryInput
              placeholder='Apelido'
              id={"username-signup"}
              name={"username"}
              type={"text"}
              value={form.username}
              handleChange={onChange}
            />
            <PrimaryInput
              placeholder='E-mail'
              d={"email-signup"}
              name={"email"}
              type={"email"}
              value={form.email}
              handleChange={onChange}
            />
            <PrimaryInput
              placeholder='Senha'
              id={"password-signup"}
              name={"password"}
              type={"password"}
              value={form.password}
              handleChange={onChange}
            />
            <Span>
              Ao continuar, você concorda com o nosso <Link href='#'>Contrato de usuário</Link> e nossa <Link href='#'> Política de Privacidade</Link>
            </Span>
            <Label>
              <CheckBox
                type='checkbox'
              />
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </Label>
            <PrimaryButton
              marginTop='28px'
              type='submit'
            >Cadastrar</PrimaryButton>
          </Form>

        </Container>
      </CentraliseContainer>

    </>

  )
}

export default SignupPage