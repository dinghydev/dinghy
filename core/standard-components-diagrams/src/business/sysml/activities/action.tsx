import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTION = {
  _style: {
    entity: 'shape=rect;html=1;rounded=1;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 80,
}

export function Action(props: DiagramNodeProps) {
  return <Shape {...ACTION} {...props} _style={extendStyle(ACTION, props)} />
}
