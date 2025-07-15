import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const YOUMOB = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.youmob',
  _width: 76,
  _height: 76.2,
}

export function Youmob(props: DiagramNodeProps) {
  return <Shape {...YOUMOB} {...props} />
}
