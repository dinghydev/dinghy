import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCUMENT = {
  _style: {
    entity: 'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;',
  },
  _width: 120,
  _height: 80,
}

export function Document(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOCUMENT)} />
}
