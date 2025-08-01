import { useEffect } from 'react'
import './App.css'
import { Amplify } from 'aws-amplify'
import { generateClient } from 'aws-amplify/api'
import type { Schema } from '../amplify/data/resource'
import { Auth } from './Auth2.tsx';

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
    <Auth></Auth>
    <button onClick={sayHello} >Say Hello</button>
    </>
  )
}

export default App
