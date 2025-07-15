import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHAPEL = {
  _style:
    'shape=mxgraph.signs.healthcare.chapel;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 72,
  _height: 98,
}

export function Chapel(props: DiagramNodeProps) {
  return <Shape {...CHAPEL} {...props} />
}
