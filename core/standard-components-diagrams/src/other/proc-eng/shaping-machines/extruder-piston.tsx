import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXTRUDER_PISTON = {
  _style: {
    entity:
      'shape=mxgraph.pid.shaping_machines.extruder_(piston);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 110,
  _original_height: 60,
}

export function ExtruderPiston(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTRUDER_PISTON}
      {...props}
      _style={extendStyle(EXTRUDER_PISTON, props)}
    />
  )
}
