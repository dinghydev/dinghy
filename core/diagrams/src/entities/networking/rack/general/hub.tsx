import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HUB = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.hub;',
  },
  _width: 160,
  _height: 30,
}

export function Hub(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HUB)} />
}
