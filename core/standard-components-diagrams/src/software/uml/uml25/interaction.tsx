import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERACTION = {
  _style: {
    group:
      'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;recursiveResize=0;container=1;collapsible=0;width=170;',
  },
}

export function Interaction(props: DiagramNodeProps) {
  return <Shape {...INTERACTION} {...props} />
}
