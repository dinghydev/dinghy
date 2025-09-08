import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PUSH_ARROW = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=2;shape=mxgraph.lean_mapping.push_arrow;',
  },
  _original_width: 100,
  _original_height: 30,
}

export function PushArrow(props: DiagramNodeProps) {
  return (
    <Shape {...PUSH_ARROW} {...props} _style={extendStyle(PUSH_ARROW, props)} />
  )
}
