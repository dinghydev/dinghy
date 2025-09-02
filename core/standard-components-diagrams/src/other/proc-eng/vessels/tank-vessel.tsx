import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TANK_VESSEL = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank,_vessel;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function TankVessel(props: DiagramNodeProps) {
  return (
    <Shape
      {...TANK_VESSEL}
      {...props}
      _style={extendStyle(TANK_VESSEL, props)}
    />
  )
}
