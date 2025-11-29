import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCHMITT_TRIGGER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.logic_gates.schmitt_trigger;',
  },
  _width: 100,
  _height: 60,
}

export function SchmittTrigger(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCHMITT_TRIGGER)} />
}
