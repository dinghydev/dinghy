import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAS_MOBILE_ACCELERATION_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mas_mobile_acceleration_service;',
  },
  _width: 51.3,
  _height: 37.8,
}

export function MasMobileAccelerationService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MAS_MOBILE_ACCELERATION_SERVICE)}
    />
  )
}
