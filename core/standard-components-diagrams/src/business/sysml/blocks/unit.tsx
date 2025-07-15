import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const UNIT = {
  _style: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;',
  _width: 200,
  _height: 60,
}

export function Unit(props: DiagramNodeProps) {
  return <Shape {...UNIT} {...props} />
}
