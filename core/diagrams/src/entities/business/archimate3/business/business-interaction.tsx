import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUSINESS_INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=interaction;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function BusinessInteraction(props: NodeProps) {
  return (
    <Shape
      {...BUSINESS_INTERACTION}
      {...props}
      _style={extendStyle(BUSINESS_INTERACTION, props)}
    />
  )
}
