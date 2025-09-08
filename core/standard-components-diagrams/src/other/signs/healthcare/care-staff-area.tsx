import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CARE_STAFF_AREA = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.care_staff_area;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 97,
  _original_height: 98,
}

export function CareStaffArea(props: DiagramNodeProps) {
  return (
    <Shape
      {...CARE_STAFF_AREA}
      {...props}
      _style={extendStyle(CARE_STAFF_AREA, props)}
    />
  )
}
