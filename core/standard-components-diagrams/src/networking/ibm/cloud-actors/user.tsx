import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#000000;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _width: 0,
  _height: 48,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} _style={extendStyle(USER, props)} />
}
