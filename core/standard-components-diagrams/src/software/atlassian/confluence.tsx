import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONFLUENCE = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Confluence_Logo.svg;strokeColor=none;',
  },
  _width: 63,
  _height: 57,
}

export function Confluence(props: DiagramNodeProps) {
  return (
    <Shape {...CONFLUENCE} {...props} _style={extendStyle(CONFLUENCE, props)} />
  )
}
