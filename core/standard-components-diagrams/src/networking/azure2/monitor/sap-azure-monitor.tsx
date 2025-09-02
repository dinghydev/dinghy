import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAP_AZURE_MONITOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/monitor/SAP_Azure_Monitor.svg;strokeColor=none;',
  },
  _original_width: 70,
  _original_height: 56.00000000000001,
}

export function SapAzureMonitor(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAP_AZURE_MONITOR}
      {...props}
      _style={extendStyle(SAP_AZURE_MONITOR, props)}
    />
  )
}
