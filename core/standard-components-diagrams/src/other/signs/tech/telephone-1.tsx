import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TELEPHONE_1 = {
  _style:
    'shape=mxgraph.signs.tech.telephone_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 42,
  _height: 100,
}

export function Telephone1(props: DiagramNodeProps) {
  return <Shape {...TELEPHONE_1} {...props} />
}
