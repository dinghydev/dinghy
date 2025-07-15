import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONTAINER_TANK_CISTERN_BOTTOM = {
  _style:
    'shape=mxgraph.pid.vessels.container,_tank,_cistern_(bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function ContainerTankCisternBottom(props: DiagramNodeProps) {
  return <Shape {...CONTAINER_TANK_CISTERN_BOTTOM} {...props} />
}
