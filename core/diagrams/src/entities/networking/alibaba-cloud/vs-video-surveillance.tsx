import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VS_VIDEO_SURVEILLANCE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.vs_video_surveillance;',
  },
  _original_width: 54.900000000000006,
  _original_height: 54.900000000000006,
}

export function VsVideoSurveillance(props: NodeProps) {
  return (
    <Shape
      {...VS_VIDEO_SURVEILLANCE}
      {...props}
      _style={extendStyle(VS_VIDEO_SURVEILLANCE, props)}
    />
  )
}
