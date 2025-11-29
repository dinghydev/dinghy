import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBILE_CLIENT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.mobile_client;fillColor=#D2D3D3;gradientColor=none;',
  },
  _width: 40.5,
  _height: 63,
}

export function MobileClient(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MOBILE_CLIENT)} />
}
