import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.business_icons.icon3;',
  },
  _original_width: 45,
  _original_height: 50,
}

export function Icon3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON3)} />
}
