import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BING = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.bing;fillColor=#008373;strokeColor=none',
  _width: 53,
  _height: 66.2,
}

export function Bing(props: DiagramNodeProps) {
  return <Shape {...BING} {...props} />
}
