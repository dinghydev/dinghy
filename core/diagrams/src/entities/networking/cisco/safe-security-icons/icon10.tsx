import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON10 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon10;',
  },
  _width: 50,
  _height: 31,
}

export function Icon10(props: NodeProps) {
  return <Shape {...ICON10} {...props} _style={extendStyle(ICON10, props)} />
}
