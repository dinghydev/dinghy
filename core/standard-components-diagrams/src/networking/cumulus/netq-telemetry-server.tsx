import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETQ_TELEMETRY_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/netq_telemetry_server.svg;strokeColor=none;',
  },
  _original_width: 96,
  _original_height: 24,
}

export function NetqTelemetryServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETQ_TELEMETRY_SERVER}
      {...props}
      _style={extendStyle(NETQ_TELEMETRY_SERVER, props)}
    />
  )
}
