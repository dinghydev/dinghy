import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRELLO = {
  _style: 'image;image=img/lib/atlassian/Trello_Logo.svg;html=1;',
  _width: 70,
  _height: 70,
}

export function Trello(props: DiagramNodeProps) {
  return <Shape {...TRELLO} {...props} />
}
