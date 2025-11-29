import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON35 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon35;',
  },
  _width: 50,
  _height: 31,
}

export function Icon35(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON35)} />
}
