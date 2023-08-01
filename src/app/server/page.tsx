import { GetServerSideProps } from 'next'

export default async function Server() {

  
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return <h1>{new Date().toString()}</h1>
}

export const revalidate = 20
