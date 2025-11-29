import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DOCUMENT = {
  _style: {
    entity: 'whiteSpace=wrap;html=1;shape=mxgraph.basic.document',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Document(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DOCUMENT)} />
}
