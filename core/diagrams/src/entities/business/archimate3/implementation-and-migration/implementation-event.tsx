import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMPLEMENTATION_EVENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.application;appType=event;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function ImplementationEvent(props: NodeProps) {
  return (
    <Shape
      {...IMPLEMENTATION_EVENT}
      {...props}
      _style={extendStyle(IMPLEMENTATION_EVENT, props)}
    />
  )
}
