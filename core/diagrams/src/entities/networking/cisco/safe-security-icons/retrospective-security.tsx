import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RETROSPECTIVE_SECURITY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.retrospective_security;',
  },
  _original_width: 50,
  _original_height: 48,
}

export function RetrospectiveSecurity(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, RETROSPECTIVE_SECURITY)} />
  )
}
