import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOURCEFORGE_2 = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sourceforge_2;fillColor=#00547E;strokeColor=none',
  _width: 63.2,
  _height: 46.800000000000004,
}

export function Sourceforge2(props: DiagramNodeProps) {
  return <Shape {...SOURCEFORGE_2} {...props} />
}
