import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const IOT_WIRELESS_CONNECTION_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.iot_wireless_connection_service;',
  },
  _original_width: 42.3,
  _original_height: 49.8,
}

export function IotWirelessConnectionService(props: DiagramNodeProps) {
  return (
    <Shape
      {...IOT_WIRELESS_CONNECTION_SERVICE}
      {...props}
      _style={extendStyle(IOT_WIRELESS_CONNECTION_SERVICE, props)}
    />
  )
}
