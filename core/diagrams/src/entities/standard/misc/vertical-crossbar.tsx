import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VERTICAL_CROSSBAR = {
  _style: {
    entity: 'shape=crossbar;whiteSpace=wrap;html=1;rounded=1;direction=south;',
  },
  _width: 20,
  _height: 120,
}

export function VerticalCrossbar(props: DiagramNodeProps) {
  return (
    <Shape
      {...VERTICAL_CROSSBAR}
      {...props}
      _style={extendStyle(VERTICAL_CROSSBAR, props)}
    />
  )
}
