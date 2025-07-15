import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ULTRASOUND = {
  _style:
    'shape=mxgraph.signs.healthcare.ultrasound;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 90,
  _height: 99,
}

export function Ultrasound(props: DiagramNodeProps) {
  return <Shape {...ULTRASOUND} {...props} />
}
