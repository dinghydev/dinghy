import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON8 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon8;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Icon8(props: NodeProps) {
  return <Shape {...ICON8} {...props} _style={extendStyle(ICON8, props)} />
}
