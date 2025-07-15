import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBSERVATORY = {
  _style: 'fillColor=#009271;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function Observatory(props: DiagramNodeProps) {
  return <Shape {...OBSERVATORY} {...props} />
}
