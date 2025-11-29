import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_INTERFACE_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate.application;appType=interface2',
  },
  _width: 100,
  _height: 75,
}

export function BusinessInterface2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUSINESS_INTERFACE_2)} />
}
