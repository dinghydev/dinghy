import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_INTERFACE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=interface;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function BusinessInterface(props: NodeProps) {
  return (
    <Shape
      {...BUSINESS_INTERFACE}
      {...props}
      _style={extendStyle(BUSINESS_INTERFACE, props)}
    />
  )
}
