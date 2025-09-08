import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAMERA = {
  _style: {
    entity:
      'points=[[0,0.5,0],[0.19,0.02,0],[0.59,0,0],[0.985,0.02,0],[1,0.5,0],[0.985,0.98,0],[0.59,1,0],[0.19,0.98,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.camera;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 90,
  _original_height: 50,
}

export function Camera(props: DiagramNodeProps) {
  return <Shape {...CAMERA} {...props} _style={extendStyle(CAMERA, props)} />
}
