import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OBJECT = {
  _style: {
    entity: 'html=1;whiteSpace=wrap;',
  },
  _width: 110,
  _height: 50,
}

export function Object(props: NodeProps) {
  return <Shape {...OBJECT} {...props} _style={extendStyle(OBJECT, props)} />
}
