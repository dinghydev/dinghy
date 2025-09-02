import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COST_ALERTS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cost_Alerts.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 56.00000000000001,
}

export function CostAlerts(props: DiagramNodeProps) {
  return (
    <Shape
      {...COST_ALERTS}
      {...props}
      _style={extendStyle(COST_ALERTS, props)}
    />
  )
}
