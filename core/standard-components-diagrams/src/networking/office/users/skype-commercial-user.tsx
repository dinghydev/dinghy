import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SKYPE_COMMERCIAL_USER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.users.skype_commercial_user;',
  _width: 59,
  _height: 56,
}

export function SkypeCommercialUser(props: DiagramNodeProps) {
  return <Shape {...SKYPE_COMMERCIAL_USER} {...props} />
}
