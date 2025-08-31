import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERACTION_2 = {
  _style: {
    group:
      'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;recursiveResize=0;container=1;collapsible=0;width=50;',
  },
}

export function Interaction2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERACTION_2}
      {...props}
      _style={extendStyle(INTERACTION_2, props)}
    />
  )
}
