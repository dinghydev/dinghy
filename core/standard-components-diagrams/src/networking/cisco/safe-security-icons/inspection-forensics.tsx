import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INSPECTION_FORENSICS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.inspection_forensics;',
  },
  _original_width: 50,
  _original_height: 38.5,
}

export function InspectionForensics(props: DiagramNodeProps) {
  return (
    <Shape
      {...INSPECTION_FORENSICS}
      {...props}
      _style={extendStyle(INSPECTION_FORENSICS, props)}
    />
  )
}
