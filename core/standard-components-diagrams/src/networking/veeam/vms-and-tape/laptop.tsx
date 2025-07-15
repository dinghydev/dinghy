import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAPTOP = {
  _style:
    'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.laptop;',
  _width: 58.4,
  _height: 44,
}

export function Laptop(props: DiagramNodeProps) {
  return <Shape {...LAPTOP} {...props} />
}
