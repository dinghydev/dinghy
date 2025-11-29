import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSPECTION_FORENSICS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.inspection_forensics;',
  },
  _width: 50,
  _height: 38.5,
}

export function InspectionForensics(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INSPECTION_FORENSICS)} />
}
