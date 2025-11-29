import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSTANCE = {
  _style: {
    entity: 'fontStyle=0;html=1;whiteSpace=wrap;',
  },
  _width: 120,
  _height: 40,
}

export function Instance(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INSTANCE)} />
}
