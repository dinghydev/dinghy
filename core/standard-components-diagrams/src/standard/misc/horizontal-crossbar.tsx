import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_CROSSBAR = {
  _style: {
    entity: 'shape=crossbar;whiteSpace=wrap;html=1;rounded=1;',
  },
  _original_width: 120,
  _original_height: 20,
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
