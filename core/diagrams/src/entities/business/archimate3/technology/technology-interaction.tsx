import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TECHNOLOGY_INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=interaction;archiType=rounded;',
  },
  _width: 150,
  _height: 75,
}

export function TechnologyInteraction(props: NodeProps) {
  return (
    <Shape
      {...TECHNOLOGY_INTERACTION}
      {...props}
      _style={extendStyle(TECHNOLOGY_INTERACTION, props)}
    />
  )
}
