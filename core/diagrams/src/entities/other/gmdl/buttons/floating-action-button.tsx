import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLOATING_ACTION_BUTTON = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#FF4081;strokeColor=none;shadow=1;aspect=fixed;sketch=0;html=1;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  },
  _width: 0,
  _height: 56,
}

export function FloatingActionButton(props: NodeProps) {
  return (
    <Shape
      {...FLOATING_ACTION_BUTTON}
      {...props}
      _style={extendStyle(FLOATING_ACTION_BUTTON, props)}
    />
  )
}
