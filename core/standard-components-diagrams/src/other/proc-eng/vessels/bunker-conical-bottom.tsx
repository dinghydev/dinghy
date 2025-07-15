import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUNKER_CONICAL_BOTTOM = {
  _style:
    'shape=mxgraph.pid.vessels.bunker_(conical_bottom);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 100,
  _height: 100,
}

export function BunkerConicalBottom(props: DiagramNodeProps) {
  return <Shape {...BUNKER_CONICAL_BOTTOM} {...props} />
}
