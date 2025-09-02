import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LICENSE_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.license_server;',
  },
  _original_width: 65,
  _original_height: 85,
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
