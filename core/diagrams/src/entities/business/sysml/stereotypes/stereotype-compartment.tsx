import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STEREOTYPE_COMPARTMENT = {
  _style: {
    entity: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;',
  },
  _width: 400,
  _height: 100,
}

export function StereotypeCompartment(props: NodeProps) {
  return (
    <Shape
      {...STEREOTYPE_COMPARTMENT}
      {...props}
      _style={extendStyle(STEREOTYPE_COMPARTMENT, props)}
    />
  )
}
