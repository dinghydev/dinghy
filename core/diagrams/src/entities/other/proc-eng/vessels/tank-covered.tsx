import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TANK_COVERED = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.tank_(covered);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 75,
}

export function TankCovered(props: DiagramNodeProps) {
  return (
    <Shape
      {...TANK_COVERED}
      {...props}
      _style={extendStyle(TANK_COVERED, props)}
    />
  )
}
