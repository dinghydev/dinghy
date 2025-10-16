import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STACKDRIVER = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;',
  },
  _width: 0,
  _height: 60,
}

export function Stackdriver(props: DiagramNodeProps) {
  return (
    <Shape
      {...STACKDRIVER}
      {...props}
      _style={extendStyle(STACKDRIVER, props)}
    />
  )
}
