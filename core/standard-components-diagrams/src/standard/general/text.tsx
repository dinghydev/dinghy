import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEXT = {
  _style: {
    entity:
      'text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;',
  },
  _original_width: 60,
  _original_height: 30,
}

export function Text(props: DiagramNodeProps) {
  return <Shape {...TEXT} {...props} _style={extendStyle(TEXT, props)} />
}
