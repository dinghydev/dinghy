import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PUSH_ARROW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.push_arrow;',
  },
  _width: 100,
  _height: 30,
}

export function PushArrow(props: NodeProps) {
  return (
    <Shape {...PUSH_ARROW} {...props} _style={extendStyle(PUSH_ARROW, props)} />
  )
}
