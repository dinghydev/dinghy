import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLLING_STONE = {
  _style: 'fillColor=#6E7B86;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function RollingStone(props: DiagramNodeProps) {
  return (
    <Shape
      {...ROLLING_STONE}
      {...props}
      _style={extendStyle(ROLLING_STONE, props)}
    />
  )
}
