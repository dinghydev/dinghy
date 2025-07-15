import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CITRIX_FEDERATED_AUTHENTICATION_SERVICE = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_federated_authentication_service;',
  _width: 50,
  _height: 35.275,
}

export function CitrixFederatedAuthenticationService(props: DiagramNodeProps) {
  return <Shape {...CITRIX_FEDERATED_AUTHENTICATION_SERVICE} {...props} />
}
