import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIN = {
  _style:
    'verticalLabelPosition=top;html=1;shadow=0;dashed=0;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.ios.iPin;fillColor2=#00dd00;fillColor3=#004400;strokeColor=#006600;',
  _width: 10,
  _height: 25,
}

export function Pin(props: DiagramNodeProps) {
  return <Shape {...PIN} {...props} _style={extendStyle(PIN, props)} />
}
