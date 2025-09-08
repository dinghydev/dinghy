import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HIKING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.hiking;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 93,
}

export function Hiking(props: DiagramNodeProps) {
  return <Shape {...HIKING} {...props} _style={extendStyle(HIKING, props)} />
}
