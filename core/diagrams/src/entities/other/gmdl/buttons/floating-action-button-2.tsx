import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOATING_ACTION_BUTTON_2 = {
  _style: {
    entity:
      'shape=ellipse;dashed=0;strokeColor=none;shadow=1;fontSize=13;align=center;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;html=1;aspect=fixed;',
  },
  _width: 0,
  _height: 56,
}

export function FloatingActionButton2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, FLOATING_ACTION_BUTTON_2)} />
  )
}
