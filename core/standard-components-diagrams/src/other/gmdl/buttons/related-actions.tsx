import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RELATED_ACTIONS = {
  _style:
    'shape=ellipse;strokeColor=none;fillColor=#ffffff;shadow=1;gradientColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;html=1;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  _width: 200,
  _height: 40,
}

export function RelatedActions(props: DiagramNodeProps) {
  return (
    <Shape
      {...RELATED_ACTIONS}
      {...props}
      _style={extendStyle(RELATED_ACTIONS, props)}
    />
  )
}
