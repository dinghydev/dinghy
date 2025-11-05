import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WORKCELL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.work_cell;pointerEvents=1;',
  },
  _original_width: 70,
  _original_height: 60,
}

export function Workcell(props: NodeProps) {
  return (
    <Shape {...WORKCELL} {...props} _style={extendStyle(WORKCELL, props)} />
  )
}
