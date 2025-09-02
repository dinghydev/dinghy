import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LED_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.led_2;pointerEvents=1;',
  },
  _original_width: 100,
  _original_height: 70,
}

export function Led2(props: DiagramNodeProps) {
  return <Shape {...LED_2} {...props} _style={extendStyle(LED_2, props)} />
}
