import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LINEAR_COUPLER = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.linear_coupler;',
  },
  _width: 80,
  _height: 20,
}

export function LinearCoupler(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LINEAR_COUPLER)} />
}
