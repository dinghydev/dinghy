import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON15 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon15;',
  },
  _original_width: 50,
  _original_height: 44.5,
}

export function Icon15(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON15)} />
}
