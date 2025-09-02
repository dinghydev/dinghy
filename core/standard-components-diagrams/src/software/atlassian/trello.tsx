import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRELLO = {
  _style: {
    entity:
      'image;html=1;image=img/lib/atlassian/Trello_Logo.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 70,
}

export function Trello(props: DiagramNodeProps) {
  return <Shape {...TRELLO} {...props} _style={extendStyle(TRELLO, props)} />
}
