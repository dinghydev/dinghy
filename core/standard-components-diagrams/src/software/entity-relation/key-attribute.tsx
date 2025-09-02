import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEY_ATTRIBUTE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;align=center;fontStyle=4;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function KeyAttribute(props: DiagramNodeProps) {
  return (
    <Shape
      {...KEY_ATTRIBUTE}
      {...props}
      _style={extendStyle(KEY_ATTRIBUTE, props)}
    />
  )
}
