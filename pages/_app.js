import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
`

const theme = {
  orange: "#f7931a",
  offWhite: "#f5f5f5",
  borderLight: "rgb(239,242,245)",
  lightGrey: "rgb(88,102,126)",
  grey: "rgba(56,56,56)",
  darkGrey: "rgb(34,37,49)",
  black: "rgb(1,1,1)",
  twitterBlue: "#1da1f2",
  blue: "rgb(56, 97, 251)",
  blueHover: "rgb(16, 112, 224)",
  blueTania: "#b9cdfb",
  blueTaniaHover: "#96b4f9",
  blueBitcoin: "#3490E6",
  blueHoverBitcoin: "#0056b3",
  fullWidth: "1200px",
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp