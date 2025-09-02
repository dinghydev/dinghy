import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RELATION_2 = {
  _style: {
    entity:
      'verticalAlign=bottom;html=1;endArrow=none;startArrow=none;startSize=14;startFill=0;edgeStyle=orthogonalEdgeStyle;',
  },
  _original_width: 160,
  _original_height: 0,
}

export function Relation2(props: DiagramNodeProps) {
  return (
    <Shape {...RELATION_2} {...props} _style={extendStyle(RELATION_2, props)} />
  )
}
