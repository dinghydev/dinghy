import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const USER = {
  _style: {
    entity: 'shape=actor;whiteSpace=wrap;html=1;',
  },
  _width: 40,
  _height: 60,
}

export function User(props: DiagramNodeProps) {
  return <Shape {...USER} {...props} _style={extendStyle(USER, props)} />
}
