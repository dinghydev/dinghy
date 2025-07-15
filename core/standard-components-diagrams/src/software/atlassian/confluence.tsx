import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONFLUENCE = {
  _style: 'image;html=1;image=img/lib/atlassian/Confluence_Logo.svg;',
  _width: 63,
  _height: 57,
}

export function Confluence(props: DiagramNodeProps) {
  return <Shape {...CONFLUENCE} {...props} />
}
