import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ATM_FAST_GIGABIT_ETHERSWITCH = {
  _style: {
    entity:
      'shape=mxgraph.cisco.switches.atm_fast_gigabit_etherswitch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function AtmFastGigabitEtherswitch(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ATM_FAST_GIGABIT_ETHERSWITCH)}
    />
  )
}
