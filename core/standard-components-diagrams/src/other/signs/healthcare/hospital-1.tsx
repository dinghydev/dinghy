import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOSPITAL_1 = {
  _style:
    'shape=mxgraph.signs.healthcare.hospital_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 98,
}

export function Hospital1(props: DiagramNodeProps) {
  return <Shape {...HOSPITAL_1} {...props} />
}
