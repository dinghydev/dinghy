import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CSAS_CLOUD_SECURITY_ACCESS_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.csas_cloud_security_access_service;',
  _width: 43.199999999999996,
  _height: 50.099999999999994,
}

export function CsasCloudSecurityAccessService(props: DiagramNodeProps) {
  return <Shape {...CSAS_CLOUD_SECURITY_ACCESS_SERVICE} {...props} />
}
