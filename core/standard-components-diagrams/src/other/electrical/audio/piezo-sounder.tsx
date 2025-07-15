import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PIEZO_SOUNDER = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.piezo_sounder;pointerEvents=1;',
  _width: 100,
  _height: 40,
}

export function PiezoSounder(props: DiagramNodeProps) {
  return <Shape {...PIEZO_SOUNDER} {...props} />
}
