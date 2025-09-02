import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLLABORATION_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.collaboration;',
  },
  _original_width: 60,
  _original_height: 35,
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
