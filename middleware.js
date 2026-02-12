import { NextResponse } from 'next/server'

export function middleware(request) {
  const country = request.geo?.country

  // Pays autorisés
  const allowedCountries = ['PT', 'SA', 'ES']

  if (!allowedCountries.includes(country)) {
    return new NextResponse(
      'Access denied in your country',
      { status: 403 }
    )
  }

  return NextResponse.next()
}