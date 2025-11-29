import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON20 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon20;',
  },
  _original_width: 44.5,
  _original_height: 50,
}

export function Icon20(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON20)} />
}
