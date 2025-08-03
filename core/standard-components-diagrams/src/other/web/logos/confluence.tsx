import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONFLUENCE = {
  _style:
    'image;image=img/lib/atlassian/Confluence_Logo.svg;html=1;strokeColor=none;',
  _width: 63,
  _height: 57,
}

export function Confluence(props: DiagramNodeProps) {
  return <Shape {...CONFLUENCE} {...props} />
}
