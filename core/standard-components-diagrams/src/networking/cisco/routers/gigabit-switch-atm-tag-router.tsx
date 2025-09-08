import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GIGABIT_SWITCH_ATM_TAG_ROUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.gigabit_switch_atm_tag_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function GigabitSwitchAtmTagRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...GIGABIT_SWITCH_ATM_TAG_ROUTER}
      {...props}
      _style={extendStyle(GIGABIT_SWITCH_ATM_TAG_ROUTER, props)}
    />
  )
}
