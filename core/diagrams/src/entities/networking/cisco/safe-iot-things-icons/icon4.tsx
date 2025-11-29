import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON4 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon4;',
  },
  _width: 50,
  _height: 39,
}

export function Icon4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON4)} />
}
