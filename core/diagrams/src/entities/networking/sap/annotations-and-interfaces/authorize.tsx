import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTHORIZE = {
  _style: {
    entity:
      'rounded=1;whiteSpace=wrap;html=1;arcSize=50;strokeColor=#470bed;fillColor=#f1edff;fontColor=#266f3a;strokeWidth=1.5;',
  },
  _width: 125,
  _height: 16,
}

export function Authorize(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AUTHORIZE)} />
}
