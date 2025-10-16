import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CYCLING = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.cycling;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 84,
}

export function Cycling(props: DiagramNodeProps) {
  return <Shape {...CYCLING} {...props} _style={extendStyle(CYCLING, props)} />
}
