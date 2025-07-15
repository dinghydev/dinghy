import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LIFELINE_CONTINUATION_2 = {
  _style: {
    group:
      'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&#34;curved&#34;:0,&#34;rounded&#34;:0};',
  },
}

export function LifelineContinuation2(props: DiagramNodeProps) {
  return <Shape {...LIFELINE_CONTINUATION_2} {...props} />
}
