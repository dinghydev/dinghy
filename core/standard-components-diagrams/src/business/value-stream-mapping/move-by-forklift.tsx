import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOVE_BY_FORKLIFT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.move_by_forklift;',
  },
  _original_width: 92,
  _original_height: 100,
}

export function MoveByForklift(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOVE_BY_FORKLIFT}
      {...props}
      _style={extendStyle(MOVE_BY_FORKLIFT, props)}
    />
  )
}
