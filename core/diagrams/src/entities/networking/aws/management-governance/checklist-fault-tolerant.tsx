import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHECKLIST_FAULT_TOLERANT = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.checklist_fault_tolerant;',
  },
  _original_width: 78,
  _original_height: 77,
}

export function ChecklistFaultTolerant(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKLIST_FAULT_TOLERANT}
      {...props}
      _style={extendStyle(CHECKLIST_FAULT_TOLERANT, props)}
    />
  )
}
