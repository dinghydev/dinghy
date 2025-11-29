import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const UNIT = {
  _style: {
    entity: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;',
  },
  _width: 200,
  _height: 60,
}

export function Unit(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, UNIT)} />
}
