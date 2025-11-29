import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIDEO_GATEWAY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.video_gateway;',
  },
  _original_width: 59,
  _original_height: 41,
}

export function VideoGateway(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VIDEO_GATEWAY)} />
}
