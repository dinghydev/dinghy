import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DIAGRAM = {
  _style: {
    group:
      'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;recursiveResize=0;container=1;collapsible=0;width=160;',
  },
}

export function Diagram(props: DiagramNodeProps) {
  return <Shape {...DIAGRAM} {...props} _style={extendStyle(DIAGRAM, props)} />
}
