import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const KNEADER = {
  _style:
    'shape=mxgraph.pid.mixers.kneader;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 170,
  _height: 100,
}

export function Kneader(props: DiagramNodeProps) {
  return <Shape {...KNEADER} {...props} />
}
