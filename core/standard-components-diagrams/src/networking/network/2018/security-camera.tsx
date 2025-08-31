import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SECURITY_CAMERA = {
  _style:
    'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.security_camera;',
  _width: 100,
  _height: 75,
}

export function SecurityCamera(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_CAMERA}
      {...props}
      _style={extendStyle(SECURITY_CAMERA, props)}
    />
  )
}
