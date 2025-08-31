import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NO_DOGS = {
  _style:
    'shape=mxgraph.signs.animals.no_dogs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function NoDogs(props: DiagramNodeProps) {
  return <Shape {...NO_DOGS} {...props} _style={extendStyle(NO_DOGS, props)} />
}
