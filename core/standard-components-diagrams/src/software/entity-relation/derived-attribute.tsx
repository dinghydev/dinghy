import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DERIVED_ATTRIBUTE = {
  _style: 'ellipse;whiteSpace=wrap;html=1;align=center;dashed=1;',
  _width: 100,
  _height: 40,
}

export function DerivedAttribute(props: DiagramNodeProps) {
  return (
    <Shape
      {...DERIVED_ATTRIBUTE}
      {...props}
      _style={extendStyle(DERIVED_ATTRIBUTE, props)}
    />
  )
}
