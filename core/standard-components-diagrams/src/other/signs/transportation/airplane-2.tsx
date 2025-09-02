import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AIRPLANE_2 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.airplane_2;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 102,
  _original_height: 57,
}

export function Airplane2(props: DiagramNodeProps) {
  return (
    <Shape {...AIRPLANE_2} {...props} _style={extendStyle(AIRPLANE_2, props)} />
  )
}
