import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STATE_6 = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=middle;rounded=1;absoluteArcSize=1;arcSize=10;dashed=1;whiteSpace=wrap;',
  },
  _original_width: 140,
  _original_height: 40,
}

export function State6(props: DiagramNodeProps) {
  return <Shape {...STATE_6} {...props} _style={extendStyle(STATE_6, props)} />
}
