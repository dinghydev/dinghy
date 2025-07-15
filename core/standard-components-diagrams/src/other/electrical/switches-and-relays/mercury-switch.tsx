import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MERCURY_SWITCH = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.mercury_switch;',
  _width: 80,
  _height: 80,
}

export function MercurySwitch(props: DiagramNodeProps) {
  return <Shape {...MERCURY_SWITCH} {...props} />
}
