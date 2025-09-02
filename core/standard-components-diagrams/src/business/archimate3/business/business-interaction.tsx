import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#ffff99;shape=mxgraph.archimate3.application;appType=interaction;archiType=rounded;',
  },
  _original_width: 150,
  _original_height: 75,
}

export function BusinessInteraction(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_INTERACTION}
      {...props}
      _style={extendStyle(BUSINESS_INTERACTION, props)}
    />
  )
}
