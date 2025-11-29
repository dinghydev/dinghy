import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon3;',
  },
  _width: 39,
  _height: 50,
}

export function Icon3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON3)} />
}
