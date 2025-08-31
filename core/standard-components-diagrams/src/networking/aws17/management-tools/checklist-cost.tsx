import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHECKLIST_COST = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.checklist_cost;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 67.5,
  _height: 75,
}

export function ChecklistCost(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHECKLIST_COST}
      {...props}
      _style={extendStyle(CHECKLIST_COST, props)}
    />
  )
}
