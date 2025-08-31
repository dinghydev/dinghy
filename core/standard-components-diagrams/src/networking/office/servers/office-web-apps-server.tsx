import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE_WEB_APPS_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.servers.office_web_apps_server;',
  },
  _width: 52,
  _height: 56,
}

export function OfficeWebAppsServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...OFFICE_WEB_APPS_SERVER}
      {...props}
      _style={extendStyle(OFFICE_WEB_APPS_SERVER, props)}
    />
  )
}
