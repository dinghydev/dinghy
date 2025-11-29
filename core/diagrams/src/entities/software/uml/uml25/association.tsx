import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATION = {
  _style: {
    entity: 'fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _width: 140,
  _height: 30,
}

export function Association(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ASSOCIATION)} />
}
