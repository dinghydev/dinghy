import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HORIZONTAL_CROSSBAR = {
  _style: {
    entity: 'shape=crossbar;whiteSpace=wrap;html=1;rounded=1;',
  },
  _width: 120,
  _height: 20,
}

export function HorizontalCrossbar(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_CROSSBAR}
      {...props}
      _style={extendStyle(HORIZONTAL_CROSSBAR, props)}
    />
  )
}
