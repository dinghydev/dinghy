import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COLLABORATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=collab;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function Collaboration(props: NodeProps) {
  return (
    <Shape
      {...COLLABORATION}
      {...props}
      _style={extendStyle(COLLABORATION, props)}
    />
  )
}
