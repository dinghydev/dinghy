import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_STORE_3 = {
  _style: {
    entity:
      'shape=cylinder;whiteSpace=wrap;html=1;boundedLbl=1;backgroundOutline=1;',
  },
  _width: 60,
  _height: 80,
}

export function DataStore3(props: NodeProps) {
  return (
    <Shape
      {...DATA_STORE_3}
      {...props}
      _style={extendStyle(DATA_STORE_3, props)}
    />
  )
}
