import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VAPP = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.vapp;',
  },
  _original_width: 44.8,
  _original_height: 44,
}

export function Vapp(props: DiagramNodeProps) {
  return <Shape {...VAPP} {...props} _style={extendStyle(VAPP, props)} />
}
