import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CDP_CLOUDERA_CDP = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cdp_cloudera_cdp;',
  _width: 54.900000000000006,
  _height: 34.199999999999996,
}

export function CdpClouderaCdp(props: DiagramNodeProps) {
  return (
    <Shape
      {...CDP_CLOUDERA_CDP}
      {...props}
      _style={extendStyle(CDP_CLOUDERA_CDP, props)}
    />
  )
}
