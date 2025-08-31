import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STEREOTYPE_COMPARTMENT = {
  _style: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;',
  _width: 400,
  _height: 100,
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
