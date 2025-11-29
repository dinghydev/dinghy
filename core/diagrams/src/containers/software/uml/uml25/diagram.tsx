import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIAGRAM = {
  _style: {
    container:
      'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;recursiveResize=0;container=1;collapsible=0;width=160;',
  },
}

export function Diagram(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DIAGRAM)} />
}
