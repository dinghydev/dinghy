import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERACTION = {
  _style: {
    container:
      'shape=umlFrame;whiteSpace=wrap;html=1;pointerEvents=0;recursiveResize=0;container=1;collapsible=0;width=170;',
  },
}

export function Interaction(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTERACTION)} />
}
