import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIFELINE = {
  _style: {
    container:
      'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&#34;curved&#34;:0,&#34;rounded&#34;:0};',
  },
}

export function Lifeline(props: DiagramNodeProps) {
  return (
    <Shape {...LIFELINE} {...props} _style={extendStyle(LIFELINE, props)} />
  )
}
