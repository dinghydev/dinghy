import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAMESPACE_COMPARTMENT = {
  _style: {
    entity:
      'shape=rect;align=left;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _width: 0,
  _height: 100,
}

export function NamespaceCompartment(props: DiagramNodeProps) {
  return (
    <Shape
      {...NAMESPACE_COMPARTMENT}
      {...props}
      _style={extendStyle(NAMESPACE_COMPARTMENT, props)}
    />
  )
}
