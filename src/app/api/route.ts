import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  
  
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  return NextResponse.json({
    date: new Date().toString(),
  })
}

export const dynamic = 'force-dynamic'
// export const revalidate = 10
