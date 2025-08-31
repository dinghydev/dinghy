import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const X_RAY = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.x_ray;fillColor=#759C3E;gradientColor=none;',
  _width: 76.5,
  _height: 85.5,
}

export function XRay(props: DiagramNodeProps) {
  return <Shape {...X_RAY} {...props} _style={extendStyle(X_RAY, props)} />
}
