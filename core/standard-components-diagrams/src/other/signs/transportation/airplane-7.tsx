import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AIRPLANE_7 = {
  _style: {
    entity:
      'shape=mxgraph.signs.transportation.airplane_7;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 100,
  _original_height: 44,
}

export function Airplane7(props: DiagramNodeProps) {
  return (
    <Shape {...AIRPLANE_7} {...props} _style={extendStyle(AIRPLANE_7, props)} />
  )
}
