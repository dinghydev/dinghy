import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEPARATOR_ELECTROMAGNETIC = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator_(electromagnetic);',
  _width: 80,
  _height: 120,
}

export function SeparatorElectromagnetic(props: DiagramNodeProps) {
  return <Shape {...SEPARATOR_ELECTROMAGNETIC} {...props} />
}
