import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNIVERSAL_SECURITY_GROUP = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.universal_security_group;',
  _width: 58,
  _height: 58,
}

export function UniversalSecurityGroup(props: DiagramNodeProps) {
  return <Shape {...UNIVERSAL_SECURITY_GROUP} {...props} />
}
