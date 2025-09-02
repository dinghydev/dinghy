import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TIMESTAMP = {
  _style: {
    entity:
      'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  },
  _original_width: 0,
  _original_height: 20,
}

export function Timestamp(props: DiagramNodeProps) {
  return (
    <Shape {...TIMESTAMP} {...props} _style={extendStyle(TIMESTAMP, props)} />
  )
}
