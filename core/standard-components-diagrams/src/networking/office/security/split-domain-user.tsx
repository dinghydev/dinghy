import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPLIT_DOMAIN_USER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.split_domain_user;',
  _width: 59,
  _height: 55,
}

export function SplitDomainUser(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPLIT_DOMAIN_USER}
      {...props}
      _style={extendStyle(SPLIT_DOMAIN_USER, props)}
    />
  )
}
