import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MQC_MOBILE_QUALITY_CENTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mqc_mobile_quality_center;',
  },
  _original_width: 49.5,
  _original_height: 49.5,
}

export function MqcMobileQualityCenter(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, MQC_MOBILE_QUALITY_CENTER)} />
  )
}
