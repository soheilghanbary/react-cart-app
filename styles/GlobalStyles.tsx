import React from 'react'
import { Global } from '@emotion/react'
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    transition: 250ms background;
  }

  :root {
    --bg-primary: #EFF6FF;
    --bg-secondary: #ffffff;
    --text-primary: #6a7071;
  }

  .dark {
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --text-primary: #e9ecef;
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
  }

`

const GlobalStyled = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyled
