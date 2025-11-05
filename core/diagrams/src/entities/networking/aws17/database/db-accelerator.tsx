import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DB_ACCELERATOR = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.db_accelerator;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 72,
  _original_height: 81,
}

export function DbAccelerator(props: NodeProps) {
  return (
    <Shape
      {...DB_ACCELERATOR}
      {...props}
      _style={extendStyle(DB_ACCELERATOR, props)}
    />
  )
}
