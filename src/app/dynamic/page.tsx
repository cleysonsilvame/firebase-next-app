async function get() {
  const origin = process.env.URL
  const response = await fetch(`${origin}/api/`, {
    // next: {
    //   revalidate: 10,
    // },
  })

  return response.json()
}

export default async function Dynamic({ params }: { params: { id: string } }) {
  const data = await get()

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export const revalidate = 20