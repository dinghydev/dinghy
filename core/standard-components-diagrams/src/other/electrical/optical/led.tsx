import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LED = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.led_1;pointerEvents=1;',
  _width: 100,
  _height: 65,
}

export function Led(props: DiagramNodeProps) {
  return <Shape {...LED} {...props} _style={extendStyle(LED, props)} />
}
