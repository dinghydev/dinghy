import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CMP_CLOUD_MOBILE_PUSH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cmp_cloud_mobile_push;',
  },
  _width: 49.199999999999996,
  _height: 35.699999999999996,
}

export function CmpCloudMobilePush(props: DiagramNodeProps) {
  return (
    <Shape
      {...CMP_CLOUD_MOBILE_PUSH}
      {...props}
      _style={extendStyle(CMP_CLOUD_MOBILE_PUSH, props)}
    />
  )
}
