import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMAND = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.command;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 99,
}

export function Command(props: NodeProps) {
  return <Shape {...COMMAND} {...props} _style={extendStyle(COMMAND, props)} />
}
