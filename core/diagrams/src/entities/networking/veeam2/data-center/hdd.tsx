import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HDD = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.hdd;',
  },
  _width: 28.000000000000004,
  _height: 35,
}

export function Hdd(props: DiagramNodeProps) {
  return <Shape {...HDD} {...props} _style={extendStyle(HDD, props)} />
}
