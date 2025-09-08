import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PIN = {
  _style: {
    entity:
      'verticalLabelPosition=top;html=1;shadow=0;dashed=0;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.ios.iPin;fillColor2=#00dd00;fillColor3=#004400;strokeColor=#006600;',
  },
  _original_width: 10,
  _original_height: 25,
}

export function Pin(props: DiagramNodeProps) {
  return <Shape {...PIN} {...props} _style={extendStyle(PIN, props)} />
}
