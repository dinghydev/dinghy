import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AIR_FREIGHT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.airplane_7;',
  },
  _width: 100,
  _height: 45,
}

export function AirFreight(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AIR_FREIGHT)} />
}
