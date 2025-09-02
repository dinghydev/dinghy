import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REQUIREMENT_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#CCCCFF;shape=mxgraph.archimate3.requirement;',
  },
  _original_width: 70,
  _original_height: 35,
}

export function Requirement2(props: DiagramNodeProps) {
  return (
    <Shape
      {...REQUIREMENT_2}
      {...props}
      _style={extendStyle(REQUIREMENT_2, props)}
    />
  )
}
