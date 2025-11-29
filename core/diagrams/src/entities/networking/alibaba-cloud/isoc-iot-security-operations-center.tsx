import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ISOC_IOT_SECURITY_OPERATIONS_CENTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.isoc_iot_security_operations_center;',
  },
  _original_width: 49.5,
  _original_height: 54.900000000000006,
}

export function IsocIotSecurityOperationsCenter(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ISOC_IOT_SECURITY_OPERATIONS_CENTER)}
    />
  )
}
