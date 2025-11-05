import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPLICATION_COLLABORATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate3.application;appType=collab;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function ApplicationCollaboration(props: NodeProps) {
  return (
    <Shape
      {...APPLICATION_COLLABORATION}
      {...props}
      _style={extendStyle(APPLICATION_COLLABORATION, props)}
    />
  )
}
