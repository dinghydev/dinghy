import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ECCENTRIC_WORM = {
  _style:
    'shape=mxgraph.pid.pumps_-_din.eccentric_worm;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function EccentricWorm(props: DiagramNodeProps) {
  return <Shape {...ECCENTRIC_WORM} {...props} />
}
