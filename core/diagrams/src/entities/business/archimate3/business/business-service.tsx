import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_SERVICE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=serv;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function BusinessService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUSINESS_SERVICE)} />
}
