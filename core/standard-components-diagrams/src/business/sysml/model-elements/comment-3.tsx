import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMENT_3 = {
  _style: 'edgeStyle=none;endArrow=none;exitX=0.8;exitY=0;dashed=1;html=1;',
  _width: 2,
  _height: 80,
}

export function Comment3(props: DiagramNodeProps) {
  return <Shape {...COMMENT_3} {...props} />
}
