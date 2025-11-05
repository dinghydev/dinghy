import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CAMERA = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#232F3D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.camera2;',
  },
  _original_width: 78,
  _original_height: 62,
}

export function Camera(props: NodeProps) {
  return <Shape {...CAMERA} {...props} _style={extendStyle(CAMERA, props)} />
}
