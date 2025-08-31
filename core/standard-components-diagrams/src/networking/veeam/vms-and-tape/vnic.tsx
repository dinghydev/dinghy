import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VNIC = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.vnic;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function Vnic(props: DiagramNodeProps) {
  return <Shape {...VNIC} {...props} _style={extendStyle(VNIC, props)} />
}
