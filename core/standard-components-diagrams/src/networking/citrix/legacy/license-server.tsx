import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LICENSE_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.license_server;',
  },
  _width: 65,
  _height: 85,
}

export function LicenseServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...LICENSE_SERVER}
      {...props}
      _style={extendStyle(LICENSE_SERVER, props)}
    />
  )
}
