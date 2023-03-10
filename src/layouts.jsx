import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

const layouts = (props) => {
  return (
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}

export default layouts
