import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LAPTOP_VIDEO_CLIENT = {
  _style: {
    entity:
      'points=[[0.13,0.225,0],[0.5,0,0],[0.87,0.225,0],[0.885,0.5,0],[0.985,0.99,0],[0.5,1,0],[0.015,0.99,0],[0.115,0.5,0]];verticalLabelPosition=bottom;sketch=0;html=1;verticalAlign=top;aspect=fixed;align=center;pointerEvents=1;shape=mxgraph.cisco19.laptop_video_client;fillColor=#005073;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42.5,
}

export function LaptopVideoClient(props: DiagramNodeProps) {
  return (
    <Shape
      {...LAPTOP_VIDEO_CLIENT}
      {...props}
      _style={extendStyle(LAPTOP_VIDEO_CLIENT, props)}
    />
  )
}
