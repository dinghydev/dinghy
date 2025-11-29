import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOUBLE_ELLIPSE = {
  _style: {
    entity: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;',
  },
  _width: 100,
  _height: 60,
}

export function DoubleEllipse(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOUBLE_ELLIPSE)} />
}
