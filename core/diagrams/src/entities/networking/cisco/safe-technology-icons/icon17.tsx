import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON17 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon17;',
  },
  _original_width: 50,
  _original_height: 42.5,
}

export function Icon17(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON17)} />
}
