import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETQ_TELEMETRY_SERVER = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/netq_telemetry_server.svg;',
  _width: 96,
  _height: 24,
}

export function NetqTelemetryServer(props: DiagramNodeProps) {
  return <Shape {...NETQ_TELEMETRY_SERVER} {...props} />
}
