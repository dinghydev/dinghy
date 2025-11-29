import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CABLE_TERMINATION = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.cable_termination',
  },
  _width: 100,
  _height: 50,
}

export function CableTermination(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CABLE_TERMINATION)} />
}
