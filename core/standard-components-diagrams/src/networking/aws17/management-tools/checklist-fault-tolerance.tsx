import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECKLIST_FAULT_TOLERANCE = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.checklist_fault_tolerance;fillColor=#759C3E;gradientColor=none;',
  _width: 57,
  _height: 72,
}

export function ChecklistFaultTolerance(props: DiagramNodeProps) {
  return <Shape {...CHECKLIST_FAULT_TOLERANCE} {...props} />
}
