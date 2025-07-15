import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESSAGE = {
  _style:
    'edgeStyle=orthogonalEdgeStyle;rounded=0;exitX=0;exitY=0.5;endArrow=none;dashed=0;html=1;strokeColor=#808080;strokeWidth=2;',
  _width: 28,
  _height: 48,
}

export function Message(props: DiagramNodeProps) {
  return <Shape {...MESSAGE} {...props} />
}
