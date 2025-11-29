import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_5 = {
  _style: {
    entity:
      'shape=ellipse;fontSize=12;strokeColor=none;fillColor=#9e9e9e;fontColor=#ffffff;html=1;',
  },
  _width: 6,
  _height: 50,
}

export function StepperWithAlternativeLabelPlacing5(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_5)}
    />
  )
}
