import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ONE_BUSINESS_VIEW = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.veeam_one_business_view;',
  },
  _original_width: 44.8,
  _original_height: 44.8,
}

export function OneBusinessView(props: NodeProps) {
  return (
    <Shape
      {...ONE_BUSINESS_VIEW}
      {...props}
      _style={extendStyle(ONE_BUSINESS_VIEW, props)}
    />
  )
}
