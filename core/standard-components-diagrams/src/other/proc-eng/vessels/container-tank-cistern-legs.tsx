import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_TANK_CISTERN_LEGS = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.container,_tank,_cistern_(legs);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 105,
}

export function ContainerTankCisternLegs(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_TANK_CISTERN_LEGS}
      {...props}
      _style={extendStyle(CONTAINER_TANK_CISTERN_LEGS, props)}
    />
  )
}
