import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OUTPUT_PIN_2 = {
  _style: {
    entity:
      'shape=mxgraph.uml25.inputPin;html=1;points=[[0,0.5],[1,0.5]];strokeColor=#ffffff;fillColor=#000000;flipH=1;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function OutputPin2(props: DiagramNodeProps) {
  return (
    <Shape
      {...OUTPUT_PIN_2}
      {...props}
      _style={extendStyle(OUTPUT_PIN_2, props)}
    />
  )
}
