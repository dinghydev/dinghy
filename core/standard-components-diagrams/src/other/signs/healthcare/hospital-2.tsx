import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HOSPITAL_2 = {
  _style:
    'shape=mxgraph.signs.healthcare.hospital_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 85,
  _height: 98,
}

export function Hospital2(props: DiagramNodeProps) {
  return <Shape {...HOSPITAL_2} {...props} />
}
