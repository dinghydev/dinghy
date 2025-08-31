import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SPINNER_PRESSED = {
  _style:
    'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.android.rect;rounded=1;fillColor=#33b5e5;strokeColor=#33b5e5;',
  _width: 0,
  _height: 28,
}

export function SpinnerPressed(props: DiagramNodeProps) {
  return (
    <Shape
      {...SPINNER_PRESSED}
      {...props}
      _style={extendStyle(SPINNER_PRESSED, props)}
    />
  )
}
