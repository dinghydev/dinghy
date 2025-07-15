import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TWO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.two;fillColor=#FF6D00;strokeColor=none',
  _width: 75.4,
  _height: 20,
}

export function Two(props: DiagramNodeProps) {
  return <Shape {...TWO} {...props} />
}
