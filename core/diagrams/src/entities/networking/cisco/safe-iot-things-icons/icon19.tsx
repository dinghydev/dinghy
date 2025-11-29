import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON19 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon19;',
  },
  _width: 50,
  _height: 38.5,
}

export function Icon19(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON19)} />
}
