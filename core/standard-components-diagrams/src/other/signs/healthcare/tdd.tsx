import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TDD = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.tdd;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 84,
  _height: 98,
}

export function Tdd(props: DiagramNodeProps) {
  return <Shape {...TDD} {...props} _style={extendStyle(TDD, props)} />
}
