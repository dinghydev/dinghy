import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WINDOWS_SERVER_APPS_AND_DESKTOPS = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.windows_server_apps_and_desktops;',
  _width: 50,
  _height: 30.125,
}

export function WindowsServerAppsAndDesktops(props: DiagramNodeProps) {
  return <Shape {...WINDOWS_SERVER_APPS_AND_DESKTOPS} {...props} />
}
