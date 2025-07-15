import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APSARAVIDEO_VOD = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.apsaravideo_vod;',
  _width: 53.7,
  _height: 39,
}

export function ApsaravideoVod(props: DiagramNodeProps) {
  return <Shape {...APSARAVIDEO_VOD} {...props} />
}
