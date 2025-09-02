import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_TANK_CISTERN_BOTTOM = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.container,_tank,_cistern_(bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function ContainerTankCisternBottom(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_TANK_CISTERN_BOTTOM}
      {...props}
      _style={extendStyle(CONTAINER_TANK_CISTERN_BOTTOM, props)}
    />
  )
}
