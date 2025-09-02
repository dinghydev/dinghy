import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAS_SSL_CENTRAL_AUTHENTICATION_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.cas_ssl_central_authentication_service;',
  },
  _original_width: 43.8,
  _original_height: 49.5,
}

export function CasSslCentralAuthenticationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...CAS_SSL_CENTRAL_AUTHENTICATION_SERVICE}
      {...props}
      _style={extendStyle(CAS_SSL_CENTRAL_AUTHENTICATION_SERVICE, props)}
    />
  )
}
