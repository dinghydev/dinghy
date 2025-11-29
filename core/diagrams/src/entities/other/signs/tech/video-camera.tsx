import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIDEO_CAMERA = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.video_camera;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 40,
}

export function VideoCamera(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIDEO_CAMERA)} />
}
