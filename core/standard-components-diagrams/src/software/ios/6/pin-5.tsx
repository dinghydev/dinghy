import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIN_5 = {
  _style: {
    entity:
      'verticalLabelPosition=top;html=1;shadow=0;dashed=0;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.ios.iPin;fillColor2=#ffa500;fillColor3=#885000;strokeColor=#997000;',
  },
  _width: 10,
  _height: 25,
}

export function Pin5(props: DiagramNodeProps) {
  return <Shape {...PIN_5} {...props} _style={extendStyle(PIN_5, props)} />
}
