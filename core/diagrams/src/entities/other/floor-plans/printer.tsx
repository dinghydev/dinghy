import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRINTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;shape=mxgraph.floorplan.printer;',
  },
  _original_width: 40,
  _original_height: 47,
}

export function Printer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRINTER)} />
}
