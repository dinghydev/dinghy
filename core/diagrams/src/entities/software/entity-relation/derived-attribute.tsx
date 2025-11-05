import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DERIVED_ATTRIBUTE = {
  _style: {
    entity: 'ellipse;whiteSpace=wrap;html=1;align=center;dashed=1;',
  },
  _width: 100,
  _height: 40,
}

export function DerivedAttribute(props: NodeProps) {
  return (
    <Shape
      {...DERIVED_ATTRIBUTE}
      {...props}
      _style={extendStyle(DERIVED_ATTRIBUTE, props)}
    />
  )
}
