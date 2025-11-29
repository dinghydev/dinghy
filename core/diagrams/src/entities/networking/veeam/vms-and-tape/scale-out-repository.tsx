import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCALE_OUT_REPOSITORY = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.scale_out_repository;',
  },
  _original_width: 64.8,
  _original_height: 57.2,
}

export function ScaleOutRepository(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCALE_OUT_REPOSITORY)} />
}
