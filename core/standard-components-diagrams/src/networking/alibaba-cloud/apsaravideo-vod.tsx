import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APSARAVIDEO_VOD = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.apsaravideo_vod;',
  },
  _original_width: 53.7,
  _original_height: 39,
}

export function ApsaravideoVod(props: DiagramNodeProps) {
  return (
    <Shape
      {...APSARAVIDEO_VOD}
      {...props}
      _style={extendStyle(APSARAVIDEO_VOD, props)}
    />
  )
}
