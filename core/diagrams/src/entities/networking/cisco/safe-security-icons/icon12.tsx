import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON12 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon12;',
  },
  _original_width: 42,
  _original_height: 50,
}

export function Icon12(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON12)} />
}
