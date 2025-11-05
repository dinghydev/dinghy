import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBJECT_2 = {
  _style: {
    entity:
      'verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;',
  },
  _width: 160,
  _height: 90,
}

export function Object2(props: NodeProps) {
  return (
    <Shape {...OBJECT_2} {...props} _style={extendStyle(OBJECT_2, props)} />
  )
}
