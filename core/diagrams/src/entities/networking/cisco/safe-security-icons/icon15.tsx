import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON15 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon15;',
  },
  _width: 39.5,
  _height: 50,
}

export function Icon15(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON15)} />
}
