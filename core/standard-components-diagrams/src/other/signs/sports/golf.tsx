import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GOLF = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.golf;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 63,
  _original_height: 99,
}

export function Golf(props: DiagramNodeProps) {
  return <Shape {...GOLF} {...props} _style={extendStyle(GOLF, props)} />
}
