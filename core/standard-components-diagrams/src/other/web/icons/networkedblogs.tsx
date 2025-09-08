import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETWORKEDBLOGS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.networkedblogs;gradientColor=#DFDEDE',
  },
  _original_width: 102.4,
  _original_height: 102.4,
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
