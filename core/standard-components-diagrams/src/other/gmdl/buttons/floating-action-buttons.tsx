import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOATING_ACTION_BUTTONS = {
  _style: {
    entity:
      'shape=ellipse;strokeColor=none;fillColor=#D1D3D4;shadow=1;gradientColor=none;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 50,
  _height: 156,
}

export function FloatingActionButtons(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOATING_ACTION_BUTTONS}
      {...props}
      _style={extendStyle(FLOATING_ACTION_BUTTONS, props)}
    />
  )
}
