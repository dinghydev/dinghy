import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ATHENS_GRAY = {
  _style: {
    entity: 'fillColor=#EAEDF2;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function AthensGray(props: DiagramNodeProps) {
  return (
    <Shape
      {...ATHENS_GRAY}
      {...props}
      _style={extendStyle(ATHENS_GRAY, props)}
    />
  )
}
