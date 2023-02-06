import React, { createContext } from 'react'

const TitleContext = React.createContext('')

const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Page = () => {
  const title = 'react book'

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

function ContextSample() {
  return <div></div>
}

export default Page
