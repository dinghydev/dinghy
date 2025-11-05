import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SUPERCOMPUTER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.computers_and_peripherals.supercomputer;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 83,
  _original_height: 99,
}

export function Supercomputer(props: NodeProps) {
  return (
    <Shape
      {...SUPERCOMPUTER}
      {...props}
      _style={extendStyle(SUPERCOMPUTER, props)}
    />
  )
}
