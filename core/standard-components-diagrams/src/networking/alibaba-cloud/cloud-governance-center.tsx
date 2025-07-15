import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_GOVERNANCE_CENTER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cloud_governance_center;',
  _width: 50.099999999999994,
  _height: 43.5,
}

export function CloudGovernanceCenter(props: DiagramNodeProps) {
  return <Shape {...CLOUD_GOVERNANCE_CENTER} {...props} />
}
