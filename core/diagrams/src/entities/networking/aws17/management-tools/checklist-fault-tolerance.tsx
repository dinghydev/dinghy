import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKLIST_FAULT_TOLERANCE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.checklist_fault_tolerance;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 57,
  _original_height: 72,
}

export function ChecklistFaultTolerance(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CHECKLIST_FAULT_TOLERANCE)} />
  )
}
