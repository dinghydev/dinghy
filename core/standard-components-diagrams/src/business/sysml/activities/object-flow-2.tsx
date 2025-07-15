import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBJECT_FLOW_2 = {
  _style: 'shape=rect;html=1;strokeWidth=2;whiteSpace=wrap;',
  _width: 1,
  _height: 60,
}

export function ObjectFlow2(props: DiagramNodeProps) {
  return <Shape {...OBJECT_FLOW_2} {...props} />
}
