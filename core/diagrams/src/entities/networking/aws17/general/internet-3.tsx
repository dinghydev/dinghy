import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNET_3 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.internet_3;fillColor=#D2D3D3;gradientColor=none;',
  },
  _width: 79.5,
  _height: 54,
}

export function Internet3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTERNET_3)} />
}
