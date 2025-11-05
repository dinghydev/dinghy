import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON36 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.icon36;',
  },
  _original_width: 50,
  _original_height: 49,
}

export function Icon36(props: NodeProps) {
  return <Shape {...ICON36} {...props} _style={extendStyle(ICON36, props)} />
}
