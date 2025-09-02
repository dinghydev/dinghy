import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMMUNIZATIONS = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.immunizations;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 98,
}

export function Immunizations(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMMUNIZATIONS}
      {...props}
      _style={extendStyle(IMMUNIZATIONS, props)}
    />
  )
}
