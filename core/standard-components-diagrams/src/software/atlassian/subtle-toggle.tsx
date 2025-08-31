import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUBTLE_TOGGLE = {
  _style:
    'fillColor=#36B37E;strokeColor=none;rounded=1;arcSize=50;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  _width: 30,
  _height: 16,
}

export function SubtleToggle(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUBTLE_TOGGLE}
      {...props}
      _style={extendStyle(SUBTLE_TOGGLE, props)}
    />
  )
}
