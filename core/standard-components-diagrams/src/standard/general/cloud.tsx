import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD = {
  _style: 'ellipse;shape=cloud;whiteSpace=wrap;html=1;',
  _width: 120,
  _height: 80,
}

export function Cloud(props: DiagramNodeProps) {
  return <Shape {...CLOUD} {...props} />
}
