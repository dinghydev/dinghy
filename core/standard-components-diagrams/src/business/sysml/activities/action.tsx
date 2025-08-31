import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

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
