import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON19 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon19;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Icon19(props: NodeProps) {
  return <Shape {...ICON19} {...props} _style={extendStyle(ICON19, props)} />
}
