import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RELATION = {
  _style: {
    entity:
      'align=right;html=1;verticalAlign=bottom;endArrow=none;startArrow=diamondThin;startSize=14;startFill=1;edgeStyle=none;',
  },
  _original_width: 160,
  _original_height: 0,
}

export function Relation(props: DiagramNodeProps) {
  return (
    <Shape {...RELATION} {...props} _style={extendStyle(RELATION, props)} />
  )
}
