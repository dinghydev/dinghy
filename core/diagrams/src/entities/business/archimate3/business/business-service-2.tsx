import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_SERVICE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.service;',
  },
  _width: 60,
  _height: 35,
}

export function BusinessService2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUSINESS_SERVICE_2)} />
}
