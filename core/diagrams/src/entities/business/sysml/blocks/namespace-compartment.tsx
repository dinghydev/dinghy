import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NAMESPACE_COMPARTMENT = {
  _style: {
    entity:
      'shape=rect;align=left;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _width: 0,
  _height: 100,
}

export function NamespaceCompartment(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NAMESPACE_COMPARTMENT)} />
}
