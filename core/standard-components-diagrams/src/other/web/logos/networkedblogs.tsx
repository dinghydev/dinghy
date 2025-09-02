import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETWORKEDBLOGS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.networkedblogs',
  },
  _original_width: 78.80000000000001,
  _original_height: 78.80000000000001,
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
