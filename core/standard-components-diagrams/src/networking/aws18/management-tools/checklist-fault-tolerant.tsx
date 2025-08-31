import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKLIST_FAULT_TOLERANT = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.checklist_fault_tolerant;',
  _width: 60,
  _height: 60,
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
