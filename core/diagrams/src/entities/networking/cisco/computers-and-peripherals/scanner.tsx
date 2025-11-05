import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCANNER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.scanner;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 80,
  _original_height: 75,
}

export function Scanner(props: NodeProps) {
  return <Shape {...SCANNER} {...props} _style={extendStyle(SCANNER, props)} />
}
