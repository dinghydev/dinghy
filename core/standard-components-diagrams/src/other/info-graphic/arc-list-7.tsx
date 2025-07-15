import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARC_LIST_7 = {
  _style: 'ellipse;fillColor=none;strokeColor=#444444;',
  _width: 0,
  _height: 200,
}

export function ArcList7(props: DiagramNodeProps) {
  return <Shape {...ARC_LIST_7} {...props} />
}
