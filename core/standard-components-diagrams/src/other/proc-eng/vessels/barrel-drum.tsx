import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BARREL_DRUM = {
  _style:
    'shape=mxgraph.pid.vessels.barrel,_drum;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 62,
  _height: 100,
}

export function BarrelDrum(props: DiagramNodeProps) {
  return <Shape {...BARREL_DRUM} {...props} />
}
