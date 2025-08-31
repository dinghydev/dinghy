import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORKEDBLOGS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.networkedblogs',
  },
  _width: 60,
  _height: 60,
}

export function Networkedblogs(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETWORKEDBLOGS}
      {...props}
      _style={extendStyle(NETWORKEDBLOGS, props)}
    />
  )
}
