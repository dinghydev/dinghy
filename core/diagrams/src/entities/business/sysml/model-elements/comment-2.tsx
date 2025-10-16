import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMMENT_2 = {
  _style: {
    entity: 'edgeStyle=none;endArrow=none;exitX=0.4;exitY=0;dashed=1;html=1;',
  },
  _width: 1,
  _height: 80,
}

export function Comment2(props: DiagramNodeProps) {
  return (
    <Shape {...COMMENT_2} {...props} _style={extendStyle(COMMENT_2, props)} />
  )
}
