import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VS_VIDEO_SURVEILLANCE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.vs_video_surveillance;',
  },
  _width: 60,
  _height: 60,
}

export function VsVideoSurveillance(props: DiagramNodeProps) {
  return (
    <Shape
      {...VS_VIDEO_SURVEILLANCE}
      {...props}
      _style={extendStyle(VS_VIDEO_SURVEILLANCE, props)}
    />
  )
}
