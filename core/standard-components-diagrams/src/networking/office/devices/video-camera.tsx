import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIDEO_CAMERA = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.video_camera;',
  _width: 52,
  _height: 25,
}

export function VideoCamera(props: DiagramNodeProps) {
  return <Shape {...VIDEO_CAMERA} {...props} />
}
