import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NEON_LAMP = {
  _style:
    'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.neon_lamp_2;',
  _width: 60,
  _height: 50,
}

export function NeonLamp(props: DiagramNodeProps) {
  return <Shape {...NEON_LAMP} {...props} />
}
