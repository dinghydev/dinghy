import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MERCURY_SWITCH_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.mercury_switch_2;',
  _width: 50,
  _height: 90,
}

export function MercurySwitch2(props: DiagramNodeProps) {
  return <Shape {...MERCURY_SWITCH_2} {...props} />
}
