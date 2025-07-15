import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ATM_TAG_SWITCH_ROUTER = {
  _style:
    'shape=mxgraph.cisco.routers.atm_tag_switch_router;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 64,
  _height: 82,
}

export function AtmTagSwitchRouter(props: DiagramNodeProps) {
  return <Shape {...ATM_TAG_SWITCH_ROUTER} {...props} />
}
