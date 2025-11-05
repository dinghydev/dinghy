import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VEEAM_ONE_BUSINESS_VIEW = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.veeam_one_business_view;',
  },
  _original_width: 46,
  _original_height: 46,
}

export function VeeamOneBusinessView(props: NodeProps) {
  return (
    <Shape
      {...VEEAM_ONE_BUSINESS_VIEW}
      {...props}
      _style={extendStyle(VEEAM_ONE_BUSINESS_VIEW, props)}
    />
  )
}
