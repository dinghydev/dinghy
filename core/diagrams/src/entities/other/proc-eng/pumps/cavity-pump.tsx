import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAVITY_PUMP = {
  _style: {
    entity:
      'shape=mxgraph.pid.pumps.cavity_pump;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 123,
  _height: 35,
}

export function CavityPump(props: NodeProps) {
  return (
    <Shape
      {...CAVITY_PUMP}
      {...props}
      _style={extendStyle(CAVITY_PUMP, props)}
    />
  )
}
