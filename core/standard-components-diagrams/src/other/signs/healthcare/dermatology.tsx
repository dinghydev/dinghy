import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DERMATOLOGY = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.dermatology;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 96,
}

export function Dermatology(props: DiagramNodeProps) {
  return (
    <Shape
      {...DERMATOLOGY}
      {...props}
      _style={extendStyle(DERMATOLOGY, props)}
    />
  )
}
