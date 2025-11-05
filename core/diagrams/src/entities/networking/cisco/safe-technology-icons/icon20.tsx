import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON20 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon20;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function Icon20(props: NodeProps) {
  return <Shape {...ICON20} {...props} _style={extendStyle(ICON20, props)} />
}
