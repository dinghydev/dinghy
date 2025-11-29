import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UTM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.utm;',
  },
  _width: 52,
  _height: 11.5,
}

export function Utm(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, UTM)} />
}
