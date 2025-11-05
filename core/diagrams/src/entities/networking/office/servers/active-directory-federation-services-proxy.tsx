import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTIVE_DIRECTORY_FEDERATION_SERVICES_PROXY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.active_directory_federation_services_proxy;',
  },
  _original_width: 44,
  _original_height: 55,
}

export function ActiveDirectoryFederationServicesProxy(props: NodeProps) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY_FEDERATION_SERVICES_PROXY}
      {...props}
      _style={extendStyle(ACTIVE_DIRECTORY_FEDERATION_SERVICES_PROXY, props)}
    />
  )
}
