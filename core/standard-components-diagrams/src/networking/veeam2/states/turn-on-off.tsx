import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TURN_ON_OFF = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.turn_on_off;',
  },
  _width: 21,
  _height: 21,
}

export function TurnOnOff(props: DiagramNodeProps) {
  return (
    <Shape
      {...TURN_ON_OFF}
      {...props}
      _style={extendStyle(TURN_ON_OFF, props)}
    />
  )
}
