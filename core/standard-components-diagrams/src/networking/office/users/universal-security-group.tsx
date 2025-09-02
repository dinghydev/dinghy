import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNIVERSAL_SECURITY_GROUP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.universal_security_group;',
  },
  _original_width: 58,
  _original_height: 58,
}

export function UniversalSecurityGroup(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNIVERSAL_SECURITY_GROUP}
      {...props}
      _style={extendStyle(UNIVERSAL_SECURITY_GROUP, props)}
    />
  )
}
