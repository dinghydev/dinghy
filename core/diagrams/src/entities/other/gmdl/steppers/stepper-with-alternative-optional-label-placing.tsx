import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING = {
  _style: {
    entity:
      'shape=ellipse;strokeColor=none;fillColor=#4285F4;fontColor=#ffffff;fontSize=12;align=center;verticalAlign=middle;html=1;',
  },
  _width: 404,
  _height: 50,
}

export function StepperWithAlternativeOptionalLabelPlacing(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING,
      )}
    />
  )
}
