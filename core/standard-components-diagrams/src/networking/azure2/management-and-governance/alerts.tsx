import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALERTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Alerts.svg;',
  _width: 67,
  _height: 56.00000000000001,
}

export function Alerts(props: DiagramNodeProps) {
  return <Shape {...ALERTS} {...props} />
}
