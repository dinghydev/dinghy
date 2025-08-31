import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEUROLOGY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.neurology;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 84,
  _height: 98,
}

export function Neurology(props: DiagramNodeProps) {
  return (
    <Shape {...NEUROLOGY} {...props} _style={extendStyle(NEUROLOGY, props)} />
  )
}
