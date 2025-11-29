import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const START_END = {
  _style: {
    entity: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.start',
  },
  _width: 80,
  _height: 30,
}

export function StartEnd(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, START_END)} />
}
