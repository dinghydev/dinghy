import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENETICS = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.genetics;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 98,
  _height: 99,
}

export function Genetics(props: DiagramNodeProps) {
  return (
    <Shape {...GENETICS} {...props} _style={extendStyle(GENETICS, props)} />
  )
}
