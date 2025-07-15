import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHALLOW_HISTORY = {
  _style: 'ellipse;html=1;',
  _width: 30,
  _height: 30,
}

export function ShallowHistory(props: DiagramNodeProps) {
  return <Shape {...SHALLOW_HISTORY} {...props} />
}
