import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IOT_WIRELESS_CONNECTION_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.iot_wireless_connection_service;',
  _width: 42.3,
  _height: 49.8,
}

export function IotWirelessConnectionService(props: DiagramNodeProps) {
  return <Shape {...IOT_WIRELESS_CONNECTION_SERVICE} {...props} />
}
