import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RAM = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.ram;',
  },
  _original_width: 40,
  _original_height: 19,
}

export function Ram(props: DiagramNodeProps) {
  return <Shape {...RAM} {...props} _style={extendStyle(RAM, props)} />
}
