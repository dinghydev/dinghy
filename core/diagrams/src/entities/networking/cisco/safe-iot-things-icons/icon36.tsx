import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ICON36 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.iot_things_icons.icon36;',
  },
  _width: 26.5,
  _height: 50,
}

export function Icon36(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ICON36)} />
}
