import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_2 = {
  _style: {
    entity:
      'shape=rect;fontColor=#4d4d4dlfontSize=13;strokeColor=none;fillColor=none;html=1;',
  },
  _width: 1,
  _height: 50,
}

export function StepperWithAlternativeLabelPlacing2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_2)}
    />
  )
}
