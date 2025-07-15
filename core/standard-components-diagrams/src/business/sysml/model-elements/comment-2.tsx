import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMENT_2 = {
  _style: 'edgeStyle=none;endArrow=none;exitX=0.4;exitY=0;dashed=1;html=1;',
  _width: 1,
  _height: 80,
}

export function Comment2(props: DiagramNodeProps) {
  return <Shape {...COMMENT_2} {...props} />
}
