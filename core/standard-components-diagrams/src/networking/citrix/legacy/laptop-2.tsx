import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LAPTOP_2 = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.laptop_2;',
  _width: 116,
  _height: 86.5,
}

export function Laptop2(props: DiagramNodeProps) {
  return <Shape {...LAPTOP_2} {...props} />
}
