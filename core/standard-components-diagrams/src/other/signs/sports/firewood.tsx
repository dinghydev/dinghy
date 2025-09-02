import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWOOD = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.firewood;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 101,
  _original_height: 90,
}

export function Firewood(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWOOD} {...props} _style={extendStyle(FIREWOOD, props)} />
  )
}
