import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/api'
import type { Schema } from '../amplify/data/resource'

const client = generateClient<Schema>();

async function sayHello() {
  const result = await client.queries.sayHello({
    name: "Pauly"
  })
  console.log(result)
}

function App() {
  
  useEffect(() => {
    console.log("Amplify", Amplify.getConfig())
  })
  return (
    <>
    <button onClick={sayHello} >Say Hello</button>
    </>
  )
}

export default App
