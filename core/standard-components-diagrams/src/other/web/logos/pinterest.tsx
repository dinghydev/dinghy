import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PINTEREST = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.pinterest;fillColor=#BD081C;strokeColor=none',
  _width: 76.80000000000001,
  _height: 74.4,
}

export function Pinterest(props: DiagramNodeProps) {
  return <Shape {...PINTEREST} {...props} />
}
