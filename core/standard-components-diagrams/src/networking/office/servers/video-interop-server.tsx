import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIDEO_INTEROP_SERVER = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.video_interop_server;',
  _width: 54,
  _height: 60,
}

export function VideoInteropServer(props: DiagramNodeProps) {
  return <Shape {...VIDEO_INTEROP_SERVER} {...props} />
}
