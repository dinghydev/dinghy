import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const X_RAY = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.x_ray;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 85.5,
}

export function XRay(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, X_RAY)} />
}
