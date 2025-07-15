import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LUNGS = {
  _style:
    'shape=mxgraph.signs.healthcare.lungs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 91,
  _height: 99,
}

export function Lungs(props: DiagramNodeProps) {
  return <Shape {...LUNGS} {...props} />
}
