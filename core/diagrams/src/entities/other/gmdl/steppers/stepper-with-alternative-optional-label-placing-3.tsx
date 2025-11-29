import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING_3 = {
  _style: {
    entity:
      'shape=rect;strokeColor=none;fillColor=none;html=1;verticalAlign=top;fontColor=#4d4d4dlfontSize=13;spacingTop=-4;',
  },
  _width: 4,
  _height: 50,
}

export function StepperWithAlternativeOptionalLabelPlacing3(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        STEPPER_WITH_ALTERNATIVE_OPTIONAL_LABEL_PLACING_3,
      )}
    />
  )
}
