import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPLIT_DOMAIN_USER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.security.split_domain_user;',
  },
  _original_width: 59,
  _original_height: 55,
}

export function SplitDomainUser(props: NodeProps) {
  return (
    <Shape
      {...SPLIT_DOMAIN_USER}
      {...props}
      _style={extendStyle(SPLIT_DOMAIN_USER, props)}
    />
  )
}
