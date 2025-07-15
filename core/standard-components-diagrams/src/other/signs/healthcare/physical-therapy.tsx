import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PHYSICAL_THERAPY = {
  _style:
    'shape=mxgraph.signs.healthcare.physical_therapy;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 99,
  _height: 89,
}

export function PhysicalTherapy(props: DiagramNodeProps) {
  return <Shape {...PHYSICAL_THERAPY} {...props} />
}
