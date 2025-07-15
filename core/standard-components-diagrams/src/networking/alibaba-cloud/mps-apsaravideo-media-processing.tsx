import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MPS_APSARAVIDEO_MEDIA_PROCESSING = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mps_apsaravideo_media_processing;',
  _width: 43.5,
  _height: 51.9,
}

export function MpsApsaravideoMediaProcessing(props: DiagramNodeProps) {
  return <Shape {...MPS_APSARAVIDEO_MEDIA_PROCESSING} {...props} />
}
