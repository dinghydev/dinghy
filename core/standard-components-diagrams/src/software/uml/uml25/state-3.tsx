import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STATE_3 = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=top;rounded=1;absoluteArcSize=1;arcSize=10;dashed=0;whiteSpace=wrap;',
  },
  _original_width: 140,
  _original_height: 40,
}

export function State3(props: DiagramNodeProps) {
  return <Shape {...STATE_3} {...props} _style={extendStyle(STATE_3, props)} />
}
