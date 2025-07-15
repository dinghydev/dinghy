import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NAMESPACE_COMPARTMENT = {
  _style:
    'shape=rect;align=left;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  _width: 0,
  _height: 100,
}

export function NamespaceCompartment(props: DiagramNodeProps) {
  return <Shape {...NAMESPACE_COMPARTMENT} {...props} />
}
