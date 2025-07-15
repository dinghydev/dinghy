import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GIGABIT_SWITCH_ATM_TAG_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.gigabit_switch_atm_tag_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 78,
  _height: 78,
}

export function GigabitSwitchAtmTagRouter(props: DiagramNodeProps) {
  return <Shape {...GIGABIT_SWITCH_ATM_TAG_ROUTER} {...props} />
}
