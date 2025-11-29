import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FIREWALL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.firewall;',
  },
  _original_width: 75,
  _original_height: 93,
}

export function Firewall(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FIREWALL)} />
}
