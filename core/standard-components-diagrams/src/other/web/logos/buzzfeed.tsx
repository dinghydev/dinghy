import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUZZFEED = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.buzzfeed;fillColor=#ED3223;strokeColor=none',
  _width: 78,
  _height: 78,
}

export function Buzzfeed(props: DiagramNodeProps) {
  return <Shape {...BUZZFEED} {...props} />
}
