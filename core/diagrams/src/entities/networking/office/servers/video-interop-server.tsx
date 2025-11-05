import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIDEO_INTEROP_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.video_interop_server;',
  },
  _original_width: 54,
  _original_height: 60,
}

export function VideoInteropServer(props: NodeProps) {
  return (
    <Shape
      {...VIDEO_INTEROP_SERVER}
      {...props}
      _style={extendStyle(VIDEO_INTEROP_SERVER, props)}
    />
  )
}
