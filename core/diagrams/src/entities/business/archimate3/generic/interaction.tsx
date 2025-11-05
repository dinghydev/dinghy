import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#EBEBEB;shape=mxgraph.archimate3.application;appType=interaction;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function Interaction(props: NodeProps) {
  return (
    <Shape
      {...INTERACTION}
      {...props}
      _style={extendStyle(INTERACTION, props)}
    />
  )
}
