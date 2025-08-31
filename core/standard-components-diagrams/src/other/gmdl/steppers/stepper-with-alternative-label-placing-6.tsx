import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_6 = {
  _style: {
    entity:
      'shape=rect;fontColor=#4d4d4dlfontSize=13;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;html=1;',
  },
  _width: 7,
  _height: 50,
}

export function StepperWithAlternativeLabelPlacing6(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_6}
      {...props}
      _style={extendStyle(STEPPER_WITH_ALTERNATIVE_LABEL_PLACING_6, props)}
    />
  )
}
