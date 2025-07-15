import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTANCE = {
  _style: 'fontStyle=0;html=1;whiteSpace=wrap;',
  _width: 120,
  _height: 40,
}

export function Instance(props: DiagramNodeProps) {
  return <Shape {...INSTANCE} {...props} />
}
