import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GTM_GLOBAL_TRAFFIC_MANAGER = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.gtm_global_traffic_manager;',
  _width: 55.5,
  _height: 54.300000000000004,
}

export function GtmGlobalTrafficManager(props: DiagramNodeProps) {
  return <Shape {...GTM_GLOBAL_TRAFFIC_MANAGER} {...props} />
}
