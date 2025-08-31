import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NUTRITION = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.nutrition;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function Nutrition(props: DiagramNodeProps) {
  return (
    <Shape {...NUTRITION} {...props} _style={extendStyle(NUTRITION, props)} />
  )
}
