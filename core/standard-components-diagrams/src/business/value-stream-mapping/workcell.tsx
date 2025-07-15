import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WORKCELL = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.work_cell;pointerEvents=1;',
  _width: 70,
  _height: 60,
}

export function Workcell(props: DiagramNodeProps) {
  return <Shape {...WORKCELL} {...props} />
}
