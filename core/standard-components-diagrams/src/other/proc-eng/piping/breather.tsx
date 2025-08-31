import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BREATHER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.breather;',
  _width: 50,
  _height: 30,
}

export function Breather(props: DiagramNodeProps) {
  return (
    <Shape {...BREATHER} {...props} _style={extendStyle(BREATHER, props)} />
  )
}
