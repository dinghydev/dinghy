import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIDEO_CAMERA = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.video_camera;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 40,
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
