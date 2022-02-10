import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>New Project26</title>
        <meta property="og:title" content="New Project26" />
      </Helmet>
      <div className={styles['container1']}>
        <h1>
          Salut! :) !!!
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h1>
        <img
          src="https://images.unsplash.com/photo-1644440908814-c6d06260ee11?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY0NDUwMTgwMA&amp;ixlib=rb-1.2.1&amp;w=200"
          alt="image"
          className={styles['image']}
        />
      </div>
      <div className={styles['container2']}>
        <h1>Salut si tie!</h1>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1644440908814-c6d06260ee11?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY0NDUwMTgwMA&amp;ixlib=rb-1.2.1&amp;w=200"
          className={styles['image1']}
        />
        <AppComponent
          heading="Salut"
          text="Hello"
          image_src="https://images.unsplash.com/photo-1644242629712-943ae5c8c4f3?ixid=Mnw5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY0NDUwMTgwMA&amp;ixlib=rb-1.2.1&amp;h=200"
        ></AppComponent>
      </div>
    </div>
  )
}

export default Home
