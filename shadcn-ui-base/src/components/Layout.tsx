'use client';
import { NextUIProvider } from "@nextui-org/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <main className=''>
                {children}
            </main>
        </NextUIProvider>
    )
}