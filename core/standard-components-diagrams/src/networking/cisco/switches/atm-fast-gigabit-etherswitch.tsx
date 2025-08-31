import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATM_FAST_GIGABIT_ETHERSWITCH = {
  _style:
    'shape=mxgraph.cisco.switches.atm_fast_gigabit_etherswitch;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 60,
  _height: 60,
}

export function AtmFastGigabitEtherswitch(props: DiagramNodeProps) {
  return (
    <Shape
      {...ATM_FAST_GIGABIT_ETHERSWITCH}
      {...props}
      _style={extendStyle(ATM_FAST_GIGABIT_ETHERSWITCH, props)}
    />
  )
}
