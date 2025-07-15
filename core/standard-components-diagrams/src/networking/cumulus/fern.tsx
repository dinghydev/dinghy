import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FERN = {
  _style: 'fillColor=#4BC05B;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function Fern(props: DiagramNodeProps) {
  return <Shape {...FERN} {...props} />
}
