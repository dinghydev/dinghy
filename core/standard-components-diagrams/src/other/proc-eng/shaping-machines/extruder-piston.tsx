import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTRUDER_PISTON = {
  _style:
    'shape=mxgraph.pid.shaping_machines.extruder_(piston);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 110,
  _height: 60,
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
