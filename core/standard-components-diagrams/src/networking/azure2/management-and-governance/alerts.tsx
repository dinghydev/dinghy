import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ALERTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Alerts.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 56.00000000000001,
}

export function Alerts(props: DiagramNodeProps) {
  return <Shape {...ALERTS} {...props} _style={extendStyle(ALERTS, props)} />
}
