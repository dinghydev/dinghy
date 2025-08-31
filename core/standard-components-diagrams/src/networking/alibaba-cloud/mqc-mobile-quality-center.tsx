import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MQC_MOBILE_QUALITY_CENTER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mqc_mobile_quality_center;',
  _width: 49.5,
  _height: 49.5,
}

export function MqcMobileQualityCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...MQC_MOBILE_QUALITY_CENTER}
      {...props}
      _style={extendStyle(MQC_MOBILE_QUALITY_CENTER, props)}
    />
  )
}
