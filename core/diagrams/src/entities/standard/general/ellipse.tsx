import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELLIPSE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;',
  },
  _width: 120,
  _height: 80,
}

export function Ellipse(props: NodeProps) {
  return <Shape {...ELLIPSE} {...props} _style={extendStyle(ELLIPSE, props)} />
}
