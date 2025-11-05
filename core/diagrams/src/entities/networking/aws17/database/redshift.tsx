import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REDSHIFT = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.redshift;fillColor=#2E73B8;gradientColor=none;',
  },
  _original_width: 67.5,
  _original_height: 75,
}

export function Redshift(props: NodeProps) {
  return (
    <Shape {...REDSHIFT} {...props} _style={extendStyle(REDSHIFT, props)} />
  )
}
