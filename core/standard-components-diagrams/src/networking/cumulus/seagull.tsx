import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SEAGULL = {
  _style: 'fillColor=#1EB5BD;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function Seagull(props: DiagramNodeProps) {
  return <Shape {...SEAGULL} {...props} />
}
