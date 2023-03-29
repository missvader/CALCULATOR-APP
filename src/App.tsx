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
  //themeValue cambia el color del botoncito switcher
  const [themeValue, setThemeValue] = useState("8%")

  /*----boton DEL para borrar valores del input ----*/
  const deleteValue = () => {
    if(value.slice(-1) === " "){    //si input está vacio, state vacio(valor anterior es = " ")
      setValue(value.substring(0, value.length - 3))
    }else if(value.slice(-2) === "0."){     //si el valor anterior es un O seguido de un punto  
      setValue(value.substring(0, value.length - 2))
    }else {                   
      setValue(value.substring(0, value.length -1))
    }
  }
  /*función para añadir punto, solo lo añadirá si existe un valor anterior al punto que no sea ni string vacio ni otro punto*/
  const addSymbol = (symbol: string) => {
    if(value.slice(-1) !== " " && value.slice(-1) !== "."){
      setValue(value + symbol)
    }
  }

  /* -----cambiar colores theme con el switcher-----*/
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
          <Input>{value}</Input>
          <ButtonContainer>
            <Button onClick={() => setValue(value + "7")}>7</Button>
            <Button onClick={() => setValue(value + "8")}>8</Button>
            <Button onClick={() => setValue(value + "9")}>9</Button>
            <Button
             color="var(--white)"
             bg="var(--key-background-dark-blue)"
             bdbox='var(--key-shadow-dark-blue)' 
             onClick={() => value.length >= 1 && deleteValue()}
            >DEL</Button>
            <Button onClick={() => setValue(value + "4")}>4</Button>
            <Button onClick={() => setValue(value + "5")}>5</Button>
            <Button onClick={() => setValue(value + "6")}>6</Button>
            <Button>+</Button>
            <Button onClick={() => setValue(value + "1")}>1</Button>
            <Button onClick={() => setValue(value + "2")}>2</Button>
            <Button onClick={() => setValue(value + "3")}>3</Button>
            <Button>-</Button>
            <Button
               onClick={() => value.length >= 1 && addSymbol(".")}
            >.</Button>
            <Button onClick={() => setValue(value + "0")}>0</Button>
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
