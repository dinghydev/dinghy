import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TERMINAL = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.terminal;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 61,
  _original_height: 54,
}

export function Terminal(props: NodeProps) {
  return (
    <Shape {...TERMINAL} {...props} _style={extendStyle(TERMINAL, props)} />
  )
}
