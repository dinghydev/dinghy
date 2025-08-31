import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_LICENSE_SERVER = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_license_server;',
  _width: 50,
  _height: 35.835,
}

export function CitrixLicenseServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_LICENSE_SERVER}
      {...props}
      _style={extendStyle(CITRIX_LICENSE_SERVER, props)}
    />
  )
}
