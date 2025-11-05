import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBJECT = {
  _style: {
    entity: 'shape=cloud;whiteSpace=wrap;html=1;',
  },
  _original_width: 120,
  _original_height: 120,
}

export function Object(props: NodeProps) {
  return <Shape {...OBJECT} {...props} _style={extendStyle(OBJECT, props)} />
}
