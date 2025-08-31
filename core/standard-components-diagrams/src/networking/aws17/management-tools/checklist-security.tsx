import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKLIST_SECURITY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.checklist_security;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 54,
  _height: 69,
}

export function ChecklistSecurity(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKLIST_SECURITY}
      {...props}
      _style={extendStyle(CHECKLIST_SECURITY, props)}
    />
  )
}
