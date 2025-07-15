import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RARITY = {
  _style: 'fillColor=#83389B;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function Rarity(props: DiagramNodeProps) {
  return <Shape {...RARITY} {...props} />
}
