import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const XENMOBILE = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenmobile;fillColor=#CCCCCC;gradientColor=#000000;gradientDirection=south;',
  _width: 70,
  _height: 89,
}

export function Xenmobile(props: DiagramNodeProps) {
  return <Shape {...XENMOBILE} {...props} />
}
