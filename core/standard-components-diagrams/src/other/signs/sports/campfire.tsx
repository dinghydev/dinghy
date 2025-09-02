import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAMPFIRE = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.campfire;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 92,
  _original_height: 98,
}

export function Campfire(props: DiagramNodeProps) {
  return (
    <Shape {...CAMPFIRE} {...props} _style={extendStyle(CAMPFIRE, props)} />
  )
}
