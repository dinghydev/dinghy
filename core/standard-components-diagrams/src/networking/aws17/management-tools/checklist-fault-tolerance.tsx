import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKLIST_FAULT_TOLERANCE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.checklist_fault_tolerance;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 57,
  _original_height: 72,
}

export function ChecklistFaultTolerance(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKLIST_FAULT_TOLERANCE}
      {...props}
      _style={extendStyle(CHECKLIST_FAULT_TOLERANCE, props)}
    />
  )
}
