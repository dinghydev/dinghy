import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COST_MANAGEMENT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cost_Management.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 60,
}

export function CostManagement(props: DiagramNodeProps) {
  return (
    <Shape
      {...COST_MANAGEMENT}
      {...props}
      _style={extendStyle(COST_MANAGEMENT, props)}
    />
  )
}
