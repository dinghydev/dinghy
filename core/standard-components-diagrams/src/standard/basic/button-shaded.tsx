import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BUTTON_SHADED = {
  _style: {
    entity:
      'labelPosition=center;verticalLabelPosition=middle;align=center;html=1;shape=mxgraph.basic.shaded_button;dx=10;fillColor=#E6E6E6;strokeColor=none;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 60,
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
