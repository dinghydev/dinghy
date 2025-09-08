import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MEMORY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.memory;',
  },
  _original_width: 50,
  _original_height: 19,
}

export function Memory(props: DiagramNodeProps) {
  return <Shape {...MEMORY} {...props} _style={extendStyle(MEMORY, props)} />
}
