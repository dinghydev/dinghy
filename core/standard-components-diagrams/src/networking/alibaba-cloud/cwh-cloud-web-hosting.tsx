import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CWH_CLOUD_WEB_HOSTING = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cwh_cloud_web_hosting;',
  _width: 49.8,
  _height: 45.6,
}

export function CwhCloudWebHosting(props: DiagramNodeProps) {
  return (
    <Shape
      {...CWH_CLOUD_WEB_HOSTING}
      {...props}
      _style={extendStyle(CWH_CLOUD_WEB_HOSTING, props)}
    />
  )
}
