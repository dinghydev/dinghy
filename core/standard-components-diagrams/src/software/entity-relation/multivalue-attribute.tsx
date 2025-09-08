import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTIVALUE_ATTRIBUTE = {
  _style: {
    entity:
      'ellipse;shape=doubleEllipse;margin=3;whiteSpace=wrap;html=1;align=center;',
  },
  _original_width: 100,
  _original_height: 40,
}

export function MultivalueAttribute(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIVALUE_ATTRIBUTE}
      {...props}
      _style={extendStyle(MULTIVALUE_ATTRIBUTE, props)}
    />
  )
}
