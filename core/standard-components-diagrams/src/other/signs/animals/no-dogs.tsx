import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NO_DOGS = {
  _style: {
    entity:
      'shape=mxgraph.signs.animals.no_dogs;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 98,
  _original_height: 98,
}

export function NoDogs(props: DiagramNodeProps) {
  return <Shape {...NO_DOGS} {...props} _style={extendStyle(NO_DOGS, props)} />
}
