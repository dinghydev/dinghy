import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IOV_IOT_VEHICLE_CLOUD = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.iov_iot_vehicle_cloud;',
  },
  _width: 54.900000000000006,
  _height: 33,
}

export function IovIotVehicleCloud(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IOV_IOT_VEHICLE_CLOUD)} />
}
