import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ACTIVE_DIRECTORY_FEDERATION_SERVICES_SERVER_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.active_directory_federation_services_server_green;',
  },
  _original_width: 45,
  _original_height: 56,
}

export function ActiveDirectoryFederationServicesServerGreen(props: NodeProps) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY_FEDERATION_SERVICES_SERVER_GREEN}
      {...props}
      _style={extendStyle(
        ACTIVE_DIRECTORY_FEDERATION_SERVICES_SERVER_GREEN,
        props,
      )}
    />
  )
}
