import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LYNC_WEB_APP_CLIENT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.lync_web_app_client;',
  _width: 83,
  _height: 51,
}

export function LyncWebAppClient(props: DiagramNodeProps) {
  return <Shape {...LYNC_WEB_APP_CLIENT} {...props} />
}
