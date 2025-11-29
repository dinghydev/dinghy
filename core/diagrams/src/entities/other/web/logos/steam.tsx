import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEAM = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.steam;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _width: 85.2,
  _height: 39.6,
}

export function Steam(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STEAM)} />
}
