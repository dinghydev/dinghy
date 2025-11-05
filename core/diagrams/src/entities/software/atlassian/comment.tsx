import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMENT = {
  _style: {
    entity:
      'shape=mxgraph.ios7.icons.user;fillColor=#ffffff;strokeColor=#253858',
  },
  _width: 470,
  _height: 125,
}

export function Comment(props: NodeProps) {
  return <Shape {...COMMENT} {...props} _style={extendStyle(COMMENT, props)} />
}
