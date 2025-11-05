import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPANY_OWNER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.company_owner;',
  },
  _original_width: 44.4,
  _original_height: 48.8,
}

export function CompanyOwner(props: NodeProps) {
  return (
    <Shape
      {...COMPANY_OWNER}
      {...props}
      _style={extendStyle(COMPANY_OWNER, props)}
    />
  )
}
