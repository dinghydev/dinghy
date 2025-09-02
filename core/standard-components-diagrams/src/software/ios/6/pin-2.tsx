import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIN_2 = {
  _style: {
    entity:
      'verticalLabelPosition=top;html=1;shadow=0;dashed=0;verticalAlign=bottom;strokeWidth=1;shape=mxgraph.ios.iPin;fillColor2=#dd0000;fillColor3=#440000;strokeColor=#660000;',
  },
  _original_width: 10,
  _original_height: 25,
}

export function Pin2(props: DiagramNodeProps) {
  return <Shape {...PIN_2} {...props} _style={extendStyle(PIN_2, props)} />
}
