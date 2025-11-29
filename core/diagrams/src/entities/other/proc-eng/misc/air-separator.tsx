import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AIR_SEPARATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.air_separator;',
  },
  _width: 65.5,
  _height: 106,
}

export function AirSeparator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AIR_SEPARATOR)} />
}
