import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_PROCESS = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.business;busType=process',
  },
  _width: 100,
  _height: 75,
}

export function BusinessProcess(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUSINESS_PROCESS)} />
}
