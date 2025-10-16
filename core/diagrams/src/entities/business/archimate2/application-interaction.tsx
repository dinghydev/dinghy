import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION_INTERACTION = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ffff;shape=mxgraph.archimate.application;appType=interaction',
  },
  _width: 100,
  _height: 75,
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
