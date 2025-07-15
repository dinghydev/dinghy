import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MOVE_BY_FORKLIFT = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.move_by_forklift;',
  _width: 92,
  _height: 100,
}

export function MoveByForklift(props: DiagramNodeProps) {
  return <Shape {...MOVE_BY_FORKLIFT} {...props} />
}
