import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FURNACE = {
  _style:
    'shape=mxgraph.pid.vessels.furnace;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 80,
  _height: 99,
}

export function Furnace(props: DiagramNodeProps) {
  return <Shape {...FURNACE} {...props} />
}
