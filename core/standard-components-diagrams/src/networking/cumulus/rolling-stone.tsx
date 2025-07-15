import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ROLLING_STONE = {
  _style: 'fillColor=#6E7B86;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function RollingStone(props: DiagramNodeProps) {
  return <Shape {...ROLLING_STONE} {...props} />
}
