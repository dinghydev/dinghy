import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const APPLICATION_INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.application;appType=interaction',
  },
  _original_width: 100,
  _original_height: 75,
}

export function ApplicationInteraction(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION_INTERACTION}
      {...props}
      _style={extendStyle(APPLICATION_INTERACTION, props)}
    />
  )
}
