import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSISTIVE_LISTENING_SYSTEM = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.assistive_listening_system;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 86,
  _original_height: 98,
}

export function AssistiveListeningSystem(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, ASSISTIVE_LISTENING_SYSTEM)} />
  )
}
