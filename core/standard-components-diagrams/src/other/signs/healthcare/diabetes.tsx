import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIABETES = {
  _style:
    'shape=mxgraph.signs.healthcare.diabetes;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 55,
}

export function Diabetes(props: DiagramNodeProps) {
  return <Shape {...DIABETES} {...props} />
}
