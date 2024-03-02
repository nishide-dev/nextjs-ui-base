import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { signOut } from 'next-auth/react'
import { Button } from 'nextra/components'

const config: DocsThemeConfig = {
  logo: <div>NextJS UI Base</div>,
  project: {
    link: 'https://github.com/nishide-dev/nextjs-ui-base',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/nishide-dev/nextjs-ui-base',
  navbar: {
    extraContent: <Button onClick={() => signOut()}>Lougout</Button>,
  },
  footer: {
    text: 'NextJS UI Base',
  },
}

export default config