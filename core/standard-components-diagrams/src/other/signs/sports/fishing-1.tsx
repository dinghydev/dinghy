import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FISHING_1 = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.fishing_1;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 100,
  _original_height: 93,
}

export function Fishing1(props: DiagramNodeProps) {
  return (
    <Shape {...FISHING_1} {...props} _style={extendStyle(FISHING_1, props)} />
  )
}
