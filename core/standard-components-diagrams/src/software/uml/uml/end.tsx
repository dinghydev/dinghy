import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const END = {
  _style: {
    entity:
      'ellipse;html=1;shape=endState;fillColor=#000000;strokeColor=#ff0000;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function End(props: DiagramNodeProps) {
  return <Shape {...END} {...props} _style={extendStyle(END, props)} />
}
