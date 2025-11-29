import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON23 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon23;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Icon23(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON23)} />
}
