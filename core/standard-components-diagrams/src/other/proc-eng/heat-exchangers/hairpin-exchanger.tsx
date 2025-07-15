import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HAIRPIN_EXCHANGER = {
  _style:
    'shape=mxgraph.pid.heat_exchangers.hairpin_exchanger;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 91,
  _height: 30,
}

export function HairpinExchanger(props: DiagramNodeProps) {
  return <Shape {...HAIRPIN_EXCHANGER} {...props} />
}
