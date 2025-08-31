import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIVE_DIRECTORY_FEDERATION_SERVICES_SERVER_BLUE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.active_directory_federation_services_server_blue;',
  _width: 45,
  _height: 56,
}

export function ActiveDirectoryFederationServicesServerBlue(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...ACTIVE_DIRECTORY_FEDERATION_SERVICES_SERVER_BLUE}
      {...props}
      _style={extendStyle(
        ACTIVE_DIRECTORY_FEDERATION_SERVICES_SERVER_BLUE,
        props,
      )}
    />
  )
}
