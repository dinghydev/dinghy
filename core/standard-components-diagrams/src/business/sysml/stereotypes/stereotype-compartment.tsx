import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STEREOTYPE_COMPARTMENT = {
  _style: {
    entity: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;',
  },
  _original_width: 400,
  _original_height: 100,
}

export function StereotypeCompartment(props: DiagramNodeProps) {
  return (
    <Shape
      {...STEREOTYPE_COMPARTMENT}
      {...props}
      _style={extendStyle(STEREOTYPE_COMPARTMENT, props)}
    />
  )
}
