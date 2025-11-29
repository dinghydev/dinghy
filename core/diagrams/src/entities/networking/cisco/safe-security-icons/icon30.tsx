import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON30 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon30;',
  },
  _width: 50,
  _height: 35,
}

export function Icon30(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON30)} />
}
