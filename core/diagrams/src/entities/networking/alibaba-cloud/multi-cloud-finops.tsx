import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTI_CLOUD_FINOPS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.multi-cloud_finops;',
  },
  _width: 52.5,
  _height: 37.5,
}

export function MultiCloudFinops(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_CLOUD_FINOPS}
      {...props}
      _style={extendStyle(MULTI_CLOUD_FINOPS, props)}
    />
  )
}
