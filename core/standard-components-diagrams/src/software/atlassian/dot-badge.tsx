import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOT_BADGE = {
  _style: 'shape=ellipse;fillColor=#0065FF;strokeColor=none;html=1;sketch=0;',
  _width: 10,
  _height: 10,
}

export function DotBadge(props: DiagramNodeProps) {
  return <Shape {...DOT_BADGE} {...props} />
}
