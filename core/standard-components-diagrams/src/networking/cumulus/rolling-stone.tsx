import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ROLLING_STONE = {
  _style: {
    entity: 'fillColor=#6E7B86;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
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
