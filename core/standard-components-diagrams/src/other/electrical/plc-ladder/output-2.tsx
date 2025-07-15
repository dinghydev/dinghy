import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OUTPUT_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.plc_ladder.output_2;',
  _width: 50,
  _height: 25,
}

export function Output2(props: DiagramNodeProps) {
  return <Shape {...OUTPUT_2} {...props} />
}
