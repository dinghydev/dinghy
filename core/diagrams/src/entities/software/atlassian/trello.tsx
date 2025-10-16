import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

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
