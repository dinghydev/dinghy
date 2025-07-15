import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEATHER = {
  _style: 'fillColor=#D2D6DF;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function Heather(props: DiagramNodeProps) {
  return <Shape {...HEATHER} {...props} />
}
