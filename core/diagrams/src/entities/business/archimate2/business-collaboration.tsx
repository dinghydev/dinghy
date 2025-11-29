import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_COLLABORATION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.application;appType=collab',
  },
  _width: 100,
  _height: 75,
}

export function BusinessCollaboration(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, BUSINESS_COLLABORATION)} />
  )
}
