import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKLIST_COST = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.checklist_cost;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 75,
}

export function ChecklistCost(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHECKLIST_COST)} />
}
