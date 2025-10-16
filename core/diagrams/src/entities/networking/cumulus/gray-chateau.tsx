import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GRAY_CHATEAU = {
  _style: {
    entity: 'fillColor=#8C9AA6;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function GrayChateau(props: DiagramNodeProps) {
  return (
    <Shape
      {...GRAY_CHATEAU}
      {...props}
      _style={extendStyle(GRAY_CHATEAU, props)}
    />
  )
}
