import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEALTH_EDUCATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.health_education;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function HealthEducation(props: DiagramNodeProps) {
  return (
    <Shape
      {...HEALTH_EDUCATION}
      {...props}
      _style={extendStyle(HEALTH_EDUCATION, props)}
    />
  )
}
