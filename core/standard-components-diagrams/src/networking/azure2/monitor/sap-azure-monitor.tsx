import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SAP_AZURE_MONITOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/monitor/SAP_Azure_Monitor.svg;strokeColor=none;',
  _width: 70,
  _height: 56.00000000000001,
}

export function SapAzureMonitor(props: DiagramNodeProps) {
  return <Shape {...SAP_AZURE_MONITOR} {...props} />
}
