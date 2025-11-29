import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RELATION = {
  _style: {
    entity:
      'align=right;html=1;verticalAlign=bottom;endArrow=none;startArrow=diamondThin;startSize=14;startFill=1;edgeStyle=none;',
  },
  _width: 160,
  _height: 0,
}

export function Relation(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RELATION)} />
}
