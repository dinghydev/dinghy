import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOBILE_VERTICAL_STEPPER = {
  _style: {
    entity: 'dashed=0;shape=rect;fillColor=#ffffff;strokeColor=none;',
  },
  _original_width: 358,
  _original_height: 642,
}

export function MobileVerticalStepper(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_VERTICAL_STEPPER}
      {...props}
      _style={extendStyle(MOBILE_VERTICAL_STEPPER, props)}
    />
  )
}
