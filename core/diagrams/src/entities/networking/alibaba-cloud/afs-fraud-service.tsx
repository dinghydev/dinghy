import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AFS_FRAUD_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.afs_fraud_service;',
  },
  _original_width: 44.1,
  _original_height: 49.8,
}

export function AfsFraudService(props: NodeProps) {
  return (
    <Shape
      {...AFS_FRAUD_SERVICE}
      {...props}
      _style={extendStyle(AFS_FRAUD_SERVICE, props)}
    />
  )
}
