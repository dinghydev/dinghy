import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NAMESPACE_COMPARTMENT = {
  _style: {
    entity:
      'shape=rect;align=left;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _original_width: 0,
  _original_height: 100,
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
