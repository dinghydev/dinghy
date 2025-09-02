import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SETTLING_TANK = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.settling_tank;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 80,
}

export function SettlingTank(props: DiagramNodeProps) {
  return (
    <Shape
      {...SETTLING_TANK}
      {...props}
      _style={extendStyle(SETTLING_TANK, props)}
    />
  )
}
