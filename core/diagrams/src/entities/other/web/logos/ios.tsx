import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IOS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.ios;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _width: 73.60000000000001,
  _height: 39.400000000000006,
}

export function Ios(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IOS)} />
}
