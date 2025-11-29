import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIDEO_CAMERA = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.video_camera;',
  },
  _width: 52,
  _height: 25,
}

export function VideoCamera(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIDEO_CAMERA)} />
}
