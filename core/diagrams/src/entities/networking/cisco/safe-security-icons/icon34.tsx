import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON34 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon34;',
  },
  _original_width: 50,
  _original_height: 45.5,
}

export function Icon34(props: NodeProps) {
  return <Shape {...ICON34} {...props} _style={extendStyle(ICON34, props)} />
}
