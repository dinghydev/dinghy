import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DDOS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.ddos;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Ddos(props: NodeProps) {
  return <Shape {...DDOS} {...props} _style={extendStyle(DDOS, props)} />
}
