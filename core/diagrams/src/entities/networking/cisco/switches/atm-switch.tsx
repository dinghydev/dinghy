import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ATM_SWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.atm_switch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 54,
  _original_height: 56,
}

export function AtmSwitch(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ATM_SWITCH)} />
}
