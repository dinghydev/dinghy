import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FAN_3 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.fan;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Fan3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FAN_3)} />
}
