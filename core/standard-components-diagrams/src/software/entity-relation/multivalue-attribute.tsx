import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIVALUE_ATTRIBUTE = {
  _style: {
    entity:
      'ellipse;shape=doubleEllipse;margin=3;whiteSpace=wrap;html=1;align=center;',
  },
  _width: 100,
  _height: 40,
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
