import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUTTON_SHADED = {
  _style:
    'labelPosition=center;verticalLabelPosition=middle;align=center;html=1;shape=mxgraph.basic.shaded_button;dx=10;fillColor=#E6E6E6;strokeColor=none;whiteSpace=wrap;',
  _width: 100,
  _height: 60,
}

export function ButtonShaded(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUTTON_SHADED}
      {...props}
      _style={extendStyle(BUTTON_SHADED, props)}
    />
  )
}
