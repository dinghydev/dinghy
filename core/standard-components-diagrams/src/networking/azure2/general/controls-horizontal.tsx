import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTROLS_HORIZONTAL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Controls_Horizontal.svg;strokeColor=none;',
  _width: 69,
  _height: 56.00000000000001,
}

export function ControlsHorizontal(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTROLS_HORIZONTAL}
      {...props}
      _style={extendStyle(CONTROLS_HORIZONTAL, props)}
    />
  )
}
