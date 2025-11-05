import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INPUT_PIN_2 = {
  _style: {
    entity:
      'shape=mxgraph.uml25.inputPin;html=1;points=[[0,0.5],[1,0.5]];strokeColor=#ffffff;fillColor=#000000;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function InputPin2(props: NodeProps) {
  return (
    <Shape
      {...INPUT_PIN_2}
      {...props}
      _style={extendStyle(INPUT_PIN_2, props)}
    />
  )
}
