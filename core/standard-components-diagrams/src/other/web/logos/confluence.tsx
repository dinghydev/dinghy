import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONFLUENCE = {
  _style:
    'image;image=img/lib/atlassian/Confluence_Logo.svg;html=1;strokeColor=none;',
  _width: 63,
  _height: 57,
}

export function Confluence(props: DiagramNodeProps) {
  return (
    <Shape {...CONFLUENCE} {...props} _style={extendStyle(CONFLUENCE, props)} />
  )
}
