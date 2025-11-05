import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SURVEILLANCE_CAMERA = {
  _style: {
    entity:
      'points=[[0.015,0.015,0],[0.5,0,0],[0.985,0.015,0],[1,0.22,0],[0.985,0.43,0],[0.73,0.85,0],[0.5,1,0],[0.285,0.85,0],[0.015,0.43,0],[0,0.22,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.surveillance_camera;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 50,
}

export function SurveillanceCamera(props: NodeProps) {
  return (
    <Shape
      {...SURVEILLANCE_CAMERA}
      {...props}
      _style={extendStyle(SURVEILLANCE_CAMERA, props)}
    />
  )
}
