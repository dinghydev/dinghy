import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FRAUD_DETECTION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.fraud_detection;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function FraudDetection(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FRAUD_DETECTION)} />
}
