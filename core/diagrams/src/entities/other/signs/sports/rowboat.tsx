import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ROWBOAT = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.rowboat;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 81,
}

export function Rowboat(props: NodeProps) {
  return <Shape {...ROWBOAT} {...props} _style={extendStyle(ROWBOAT, props)} />
}
