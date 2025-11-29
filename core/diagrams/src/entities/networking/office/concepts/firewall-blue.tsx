import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIREWALL_BLUE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.firewall;fillColor=#2072B8;',
  },
  _original_width: 47,
  _original_height: 43,
}

export function FirewallBlue(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIREWALL_BLUE)} />
}
