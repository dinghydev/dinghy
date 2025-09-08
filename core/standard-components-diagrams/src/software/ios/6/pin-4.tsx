import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PIN_4 = {
  _style: {
    entity:
      'verticalLabelPosition=top;html=1;shadow=0;dashed=0;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.ios.iPin;fillColor2=#ffff00;fillColor3=#888800;strokeColor=#999900;',
  },
  _original_width: 10,
  _original_height: 25,
}

export function Pin4(props: DiagramNodeProps) {
  return <Shape {...PIN_4} {...props} _style={extendStyle(PIN_4, props)} />
}
