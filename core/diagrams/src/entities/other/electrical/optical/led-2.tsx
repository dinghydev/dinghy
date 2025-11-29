import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LED_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.led_2;pointerEvents=1;',
  },
  _width: 100,
  _height: 70,
}

export function Led2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LED_2)} />
}
