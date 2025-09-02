import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VAPP = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vapp;',
  },
  _original_width: 92,
  _original_height: 62,
}

export function Vapp(props: DiagramNodeProps) {
  return <Shape {...VAPP} {...props} _style={extendStyle(VAPP, props)} />
}
