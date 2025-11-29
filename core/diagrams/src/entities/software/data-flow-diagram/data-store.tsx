import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_STORE = {
  _style: {
    entity:
      'html=1;dashed=0;whiteSpace=wrap;shape=partialRectangle;right=0;left=0;',
  },
  _width: 100,
  _height: 30,
}

export function DataStore(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_STORE)} />
}
