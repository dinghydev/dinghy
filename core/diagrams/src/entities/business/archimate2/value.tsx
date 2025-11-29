import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VALUE = {
  _style: {
    entity: 'fillColor=#ffff99;whiteSpace=wrap;shape=ellipse;html=1;',
  },
  _width: 100,
  _height: 56.25,
}

export function Value(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VALUE)} />
}
