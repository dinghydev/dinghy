import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_EVENT = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=event',
  },
  _width: 100,
  _height: 75,
}

export function BusinessEvent(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUSINESS_EVENT)} />
}
