import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTRUDER_PISTON = {
  _style: {
    entity:
      'shape=mxgraph.pid.shaping_machines.extruder_(piston);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 110,
  _height: 60,
}

export function ExtruderPiston(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EXTRUDER_PISTON)} />
}
