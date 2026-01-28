// Generated with:
// dinghy site -- swizzle --list
// dinghy site -- swizzle @docusaurus/theme-classic MDXComponents/A --danger --eject --typescript
import React, { type ReactNode } from 'react'
import Link from '@docusaurus/Link'
import type { Props } from '@theme/MDXComponents/A'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function MDXA(props: Props): ReactNode {
  const { siteConfig } = useDocusaurusContext()
  if (props.href.startsWith('https://')) {
    const siteHostname = new URL(siteConfig.url).hostname
    const hostname = new URL(props.href).hostname
    if (hostname === siteHostname) {
      props = { ...props, target: '_self' }
    }
  }
  return <Link {...props} />
}
