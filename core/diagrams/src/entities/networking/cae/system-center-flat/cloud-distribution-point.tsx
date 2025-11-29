import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_DISTRIBUTION_POINT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#515151;shape=mxgraph.mscae.system_center.cloud_distribution_point',
  },
  _original_width: 46,
  _original_height: 50,
}

export function CloudDistributionPoint(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CLOUD_DISTRIBUTION_POINT)} />
  )
}
