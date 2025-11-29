import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_STORE = {
  _style: {
    entity:
      'shape=partialRectangle;whiteSpace=wrap;html=1;left=0;right=0;fillColor=none;',
  },
  _width: 120,
  _height: 80,
}

export function DataStore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_STORE)} />
}
