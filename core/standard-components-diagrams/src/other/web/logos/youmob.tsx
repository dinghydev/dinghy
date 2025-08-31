import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const YOUMOB = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.youmob',
  _width: 76,
  _height: 76.2,
}

export function Youmob(props: DiagramNodeProps) {
  return <Shape {...YOUMOB} {...props} _style={extendStyle(YOUMOB, props)} />
}
