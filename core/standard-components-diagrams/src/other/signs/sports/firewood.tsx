import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWOOD = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.firewood;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 101,
  _height: 90,
}

export function Firewood(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWOOD} {...props} _style={extendStyle(FIREWOOD, props)} />
  )
}
