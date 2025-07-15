import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CARE_STAFF_AREA = {
  _style:
    'shape=mxgraph.signs.healthcare.care_staff_area;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 97,
  _height: 98,
}

export function CareStaffArea(props: DiagramNodeProps) {
  return <Shape {...CARE_STAFF_AREA} {...props} />
}
