import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RADICAL_RED = {
  _style: 'fillColor=#F1446F;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function RadicalRed(props: DiagramNodeProps) {
  return <Shape {...RADICAL_RED} {...props} />
}
