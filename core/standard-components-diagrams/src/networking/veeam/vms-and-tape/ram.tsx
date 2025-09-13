import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RAM = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.ram;',
  },
  _width: 48.4,
  _height: 25.2,
}

export function Ram(props: DiagramNodeProps) {
  return <Shape {...RAM} {...props} _style={extendStyle(RAM, props)} />
}
