import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OUTPUT_N = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.plc_ladder.not_output_1;',
  _width: 50,
  _height: 25,
}

export function OutputN(props: DiagramNodeProps) {
  return <Shape {...OUTPUT_N} {...props} />
}
