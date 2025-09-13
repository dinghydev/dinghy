import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIDEO_CAMERA = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.video_camera;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 67,
  _height: 98,
}

export function VideoCamera(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIDEO_CAMERA}
      {...props}
      _style={extendStyle(VIDEO_CAMERA, props)}
    />
  )
}
