import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFECTIOUS_DISEASE = {
  _style:
    'shape=mxgraph.signs.healthcare.infectious_disease;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 60,
  _height: 60,
}

export function InfectiousDisease(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFECTIOUS_DISEASE}
      {...props}
      _style={extendStyle(INFECTIOUS_DISEASE, props)}
    />
  )
}
