import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBJECT_FLOW = {
  _style: 'shape=rect;html=1;rounded=1;strokeWidth=2;whiteSpace=wrap;',
  _width: 260,
  _height: 60,
}

export function ObjectFlow(props: DiagramNodeProps) {
  return <Shape {...OBJECT_FLOW} {...props} />
}
