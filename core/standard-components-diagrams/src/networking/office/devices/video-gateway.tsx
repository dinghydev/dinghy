import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO_GATEWAY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.video_gateway;',
  _width: 59,
  _height: 41,
}

export function VideoGateway(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIDEO_GATEWAY}
      {...props}
      _style={extendStyle(VIDEO_GATEWAY, props)}
    />
  )
}
