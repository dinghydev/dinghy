import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CVC_CLOUD_VIDEO_CONFERENCING = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cvc_cloud_video_conferencing;',
  _width: 39.900000000000006,
  _height: 54.6,
}

export function CvcCloudVideoConferencing(props: DiagramNodeProps) {
  return (
    <Shape
      {...CVC_CLOUD_VIDEO_CONFERENCING}
      {...props}
      _style={extendStyle(CVC_CLOUD_VIDEO_CONFERENCING, props)}
    />
  )
}
