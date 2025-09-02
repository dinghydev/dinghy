import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIRETRUCK = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.firetruck;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 31,
}

export function Firetruck(props: DiagramNodeProps) {
  return (
    <Shape {...FIRETRUCK} {...props} _style={extendStyle(FIRETRUCK, props)} />
  )
}
