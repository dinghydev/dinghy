import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRELLO = {
  _style:
    'image;image=img/lib/atlassian/Trello_Logo.svg;html=1;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Trello(props: DiagramNodeProps) {
  return <Shape {...TRELLO} {...props} _style={extendStyle(TRELLO, props)} />
}
