import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COLLABORATION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.collaboration;',
  },
  _width: 60,
  _height: 35,
}

export function Collaboration2(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLLABORATION_2}
      {...props}
      _style={extendStyle(COLLABORATION_2, props)}
    />
  )
}
