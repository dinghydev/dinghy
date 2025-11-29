import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HQ_ENTERPRISE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.hq_enterprise;',
  },
  _original_width: 92,
  _original_height: 88,
}

export function HqEnterprise(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HQ_ENTERPRISE)} />
}
