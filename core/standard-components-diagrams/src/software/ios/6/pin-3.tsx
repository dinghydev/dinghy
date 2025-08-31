import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIN_3 = {
  _style: {
    entity:
      'verticalLabelPosition=top;html=1;shadow=0;dashed=0;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.ios.iPin;fillColor2=#ccccff;fillColor3=#0000ff;strokeColor=#000066;',
  },
  _width: 10,
  _height: 25,
}

export function Pin3(props: DiagramNodeProps) {
  return <Shape {...PIN_3} {...props} _style={extendStyle(PIN_3, props)} />
}
