import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOUBLE_ELLIPSE = {
  _style: 'ellipse;shape=doubleEllipse;whiteSpace=wrap;html=1;',
  _width: 100,
  _height: 60,
}

export function DoubleEllipse(props: DiagramNodeProps) {
  return <Shape {...DOUBLE_ELLIPSE} {...props} />
}
