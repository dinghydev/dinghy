import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OUTPUT_N_2 = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.plc_ladder.not_output_2;',
  _width: 50,
  _height: 25,
}

export function OutputN2(props: DiagramNodeProps) {
  return (
    <Shape {...OUTPUT_N_2} {...props} _style={extendStyle(OUTPUT_N_2, props)} />
  )
}
