'use client'

import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <main>{children}</main>
    </NextUIProvider>
  )
}
