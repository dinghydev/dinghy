import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTOR_LIFELINE = {
  _style: {
    group:
      'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&#34;curved&#34;:0,&#34;rounded&#34;:0};participant=umlActor;',
  },
}

export function ActorLifeline(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTOR_LIFELINE}
      {...props}
      _style={extendStyle(ACTOR_LIFELINE, props)}
    />
  )
}
