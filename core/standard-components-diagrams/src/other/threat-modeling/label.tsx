import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LABEL = {
  _style: {
    entity:
      'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  },
  _original_width: 80,
  _original_height: 20,
}

export function Label(props: DiagramNodeProps) {
  return <Shape {...LABEL} {...props} _style={extendStyle(LABEL, props)} />
}
