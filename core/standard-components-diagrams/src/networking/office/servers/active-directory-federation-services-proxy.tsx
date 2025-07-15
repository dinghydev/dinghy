import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVE_DIRECTORY_FEDERATION_SERVICES_PROXY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.active_directory_federation_services_proxy;',
  _width: 44,
  _height: 55,
}

export function ActiveDirectoryFederationServicesProxy(
  props: DiagramNodeProps,
) {
  return <Shape {...ACTIVE_DIRECTORY_FEDERATION_SERVICES_PROXY} {...props} />
}
