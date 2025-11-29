import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_GOVERNANCE_CENTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_governance_center;',
  },
  _original_width: 50.099999999999994,
  _original_height: 43.5,
}

export function CloudGovernanceCenter(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CLOUD_GOVERNANCE_CENTER)} />
  )
}
