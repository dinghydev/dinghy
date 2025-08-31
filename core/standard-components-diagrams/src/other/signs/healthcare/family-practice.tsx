import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FAMILY_PRACTICE = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.family_practice;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function FamilyPractice(props: DiagramNodeProps) {
  return (
    <Shape
      {...FAMILY_PRACTICE}
      {...props}
      _style={extendStyle(FAMILY_PRACTICE, props)}
    />
  )
}
