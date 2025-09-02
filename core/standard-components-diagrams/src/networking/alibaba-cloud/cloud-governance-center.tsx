import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_GOVERNANCE_CENTER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_governance_center;',
  },
  _original_width: 50.099999999999994,
  _original_height: 43.5,
}

export function CloudGovernanceCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_GOVERNANCE_CENTER}
      {...props}
      _style={extendStyle(CLOUD_GOVERNANCE_CENTER, props)}
    />
  )
}
