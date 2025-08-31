import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ISOC_IOT_SECURITY_OPERATIONS_CENTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.isoc_iot_security_operations_center;',
  },
  _width: 49.5,
  _height: 54.900000000000006,
}

export function IsocIotSecurityOperationsCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...ISOC_IOT_SECURITY_OPERATIONS_CENTER}
      {...props}
      _style={extendStyle(ISOC_IOT_SECURITY_OPERATIONS_CENTER, props)}
    />
  )
}
