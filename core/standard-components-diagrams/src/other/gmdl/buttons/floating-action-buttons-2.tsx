import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOATING_ACTION_BUTTONS_2 = {
  _style: {
    entity:
      'shape=ellipse;strokeColor=none;fillColor=#FF4081;shadow=1;gradientColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 2,
  _height: 156,
}

export function FloatingActionButtons2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOATING_ACTION_BUTTONS_2}
      {...props}
      _style={extendStyle(FLOATING_ACTION_BUTTONS_2, props)}
    />
  )
}
