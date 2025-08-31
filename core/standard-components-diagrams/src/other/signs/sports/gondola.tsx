import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GONDOLA = {
  _style: {
    entity:
      'shape=mxgraph.signs.sports.gondola;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 99,
  _height: 89,
}

export function Gondola(props: DiagramNodeProps) {
  return <Shape {...GONDOLA} {...props} _style={extendStyle(GONDOLA, props)} />
}
