import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON21 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon21;',
  },
  _original_width: 43,
  _original_height: 50,
}

export function Icon21(props: NodeProps) {
  return <Shape {...ICON21} {...props} _style={extendStyle(ICON21, props)} />
}
