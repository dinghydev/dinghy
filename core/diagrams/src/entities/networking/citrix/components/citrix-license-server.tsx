import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CITRIX_LICENSE_SERVER = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_license_server;',
  },
  _width: 50,
  _height: 35.835,
}

export function CitrixLicenseServer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CITRIX_LICENSE_SERVER)} />
}
