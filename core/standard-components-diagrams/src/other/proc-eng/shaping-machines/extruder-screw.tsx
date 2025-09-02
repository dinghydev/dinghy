import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTRUDER_SCREW = {
  _style: {
    entity:
      'shape=mxgraph.pid.shaping_machines.extruder_(screw);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 110,
  _original_height: 60,
}

export function ExtruderScrew(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTRUDER_SCREW}
      {...props}
      _style={extendStyle(EXTRUDER_SCREW, props)}
    />
  )
}
