import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer>
        <p>
          Build for learning purpose. Design and Developed by{' '}
          <a href='http://sachinkamat.me/' target='_blank' rel='noreferrer'>
            SACHIN KAMAT
          </a>
          .{'  '}
          copyright © {year}
        </p>
      </footer>
    </>
  )
}

export default Footer
