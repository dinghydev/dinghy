import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING_4 = {
  _style: {
    entity:
      'shape=ellipse;strokeColor=none;fillColor=#9e9e9e;fontSize=12;fontColor=#ffffff;html=1;',
  },
  _width: 6,
  _height: 50,
}

export function StepperWithAlternativeOptionalLabelPlacing4(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING_4,
      )}
    />
  )
}
