import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRELLO = {
  _style: {
    entity:
      'image;image=img/lib/atlassian/Trello_Logo.svg;html=1;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 70,
}

export function Trello(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TRELLO)} />
}
