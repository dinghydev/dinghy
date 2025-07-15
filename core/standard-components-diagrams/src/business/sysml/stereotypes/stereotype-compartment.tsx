import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEREOTYPE_COMPARTMENT = {
  _style: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;align=center;',
  _width: 400,
  _height: 100,
}

export function StereotypeCompartment(props: DiagramNodeProps) {
  return <Shape {...STEREOTYPE_COMPARTMENT} {...props} />
}
