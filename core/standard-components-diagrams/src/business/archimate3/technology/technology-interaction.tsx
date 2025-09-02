import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TECHNOLOGY_INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=interaction;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function TechnologyInteraction(props: DiagramNodeProps) {
  return (
    <Shape
      {...TECHNOLOGY_INTERACTION}
      {...props}
      _style={extendStyle(TECHNOLOGY_INTERACTION, props)}
    />
  )
}
