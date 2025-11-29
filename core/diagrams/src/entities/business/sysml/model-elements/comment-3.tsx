import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMENT_3 = {
  _style: {
    entity: 'edgeStyle=none;endArrow=none;exitX=0.8;exitY=0;dashed=1;html=1;',
  },
  _width: 2,
  _height: 80,
}

export function Comment3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMMENT_3)} />
}
