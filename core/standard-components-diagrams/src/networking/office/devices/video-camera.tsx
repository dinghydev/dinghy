import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIDEO_CAMERA = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.video_camera;',
  },
  _original_width: 52,
  _original_height: 25,
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
