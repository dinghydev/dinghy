import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON24 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon24;',
  },
  _original_width: 44.5,
  _original_height: 50,
}

export function Icon24(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON24)} />
}
