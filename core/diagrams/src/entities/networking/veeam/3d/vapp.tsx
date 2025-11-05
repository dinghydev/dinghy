import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VAPP = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.vapp;',
  },
  _width: 92,
  _height: 62,
}

export function Vapp(props: NodeProps) {
  return <Shape {...VAPP} {...props} _style={extendStyle(VAPP, props)} />
}
