import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FEEDBURNER = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.feedburner',
  _width: 68.4,
  _height: 74.4,
}

export function Feedburner(props: DiagramNodeProps) {
  return <Shape {...FEEDBURNER} {...props} />
}
