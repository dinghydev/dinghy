import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_SERVER = {
  _style: {
    entity:
      'shape=rect;fillColor=#198038;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 48,
}

export function VirtualServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_SERVER}
      {...props}
      _style={extendStyle(VIRTUAL_SERVER, props)}
    />
  )
}
