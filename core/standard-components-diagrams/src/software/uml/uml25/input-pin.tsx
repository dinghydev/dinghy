import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INPUT_PIN = {
  _style: {
    entity: 'shape=mxgraph.uml25.inputPin;html=1;points=[[0,0.5],[1,0.5]];',
  },
  _original_width: 30,
  _original_height: 30,
}

export function InputPin(props: DiagramNodeProps) {
  return (
    <Shape {...INPUT_PIN} {...props} _style={extendStyle(INPUT_PIN, props)} />
  )
}
