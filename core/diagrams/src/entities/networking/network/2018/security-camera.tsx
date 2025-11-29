import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURITY_CAMERA = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.security_camera;',
  },
  _width: 100,
  _height: 75,
}

export function SecurityCamera(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SECURITY_CAMERA)} />
}
