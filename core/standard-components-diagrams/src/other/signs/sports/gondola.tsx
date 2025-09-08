import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GONDOLA = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.gondola;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 89,
}

export function Gondola(props: DiagramNodeProps) {
  return <Shape {...GONDOLA} {...props} _style={extendStyle(GONDOLA, props)} />
}
