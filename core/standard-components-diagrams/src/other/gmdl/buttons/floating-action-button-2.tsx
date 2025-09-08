import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLOATING_ACTION_BUTTON_2 = {
  _style: {
    entity:
      'shape=ellipse;dashed=0;strokeColor=none;shadow=1;fontSize=13;align=center;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;html=1;aspect=fixed;',
  },
  _original_width: 0,
  _original_height: 56,
}

export function FloatingActionButton2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FLOATING_ACTION_BUTTON_2}
      {...props}
      _style={extendStyle(FLOATING_ACTION_BUTTON_2, props)}
    />
  )
}
