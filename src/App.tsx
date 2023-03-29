import { useState } from 'react'
import GlobalStyle1 from './styles/theme1';
import GlobalStyle2 from './styles/theme2';
import GlobalStyle3 from './styles/theme3';

import { Container, 
         Header,
         WrapperSwitch, 
         Switch,
         SwitcherContainer,
         Switcher,
         Input,
         ButtonContainer,
         Button
        } from './App.style';

function App() {
  //valores de los botones
  const [value, setValue] = useState("")
  //estados del tema(colores), por defecto inicia en 1 que equivaldrá al GlobalStyle1
  const [theme, setTheme] = useState(1)
  const [themeValue, setThemeValue] = useState("8%")

  const handleTheme = () => {
    if(theme === 1){
      setTheme(2)
      setThemeValue("38%")
    }else if (theme === 2){
      setTheme(3)
      setThemeValue("70%")
    }else{
      setTheme(1)
      setThemeValue("8%")
    }
  }

  return (
    <>
      { theme === 1 && <GlobalStyle1/>}
      { theme === 2 && <GlobalStyle2/>}
      { theme === 3 && <GlobalStyle3/>}
        <Container>
          <Header>
            Calc
            <WrapperSwitch>
              theme
              <Switch>
                <div>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  </div>
                <SwitcherContainer onClick={handleTheme}>
                  <Switcher theme={themeValue}/>
                </SwitcherContainer>
              </Switch>
            </WrapperSwitch>
          </Header>
          <Input></Input>
          <ButtonContainer>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button
             color="var(--white)"
             bg="var(--key-background-dark-blue)"
             bdbox='var(--key-shadow-dark-blue)' 
            >DEL</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>+</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>-</Button>
            <Button>.</Button>
            <Button>0</Button>
            <Button>/</Button>
            <Button>x</Button>
            <Button
              gc="1/3"
              color="var(--white)"
              bg="var(--key-background-dark-blue)"
              bdbox='var(--key-shadow-dark-blue)'
            >RESET</Button>
            <Button
              gc="3/5"
              color="var(--white)"
              bg="var(--key-background-red)"
              bdbox='var(--key-shadow-dark-red)'
            >=</Button>
          </ButtonContainer>
        </Container>
    </>
  )
}

export default App
