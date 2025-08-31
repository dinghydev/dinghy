import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LYNC_WEB_APP_CLIENT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.lync_web_app_client;',
  _width: 83,
  _height: 50,
}

export function LyncWebAppClient(props: DiagramNodeProps) {
  return (
    <Shape
      {...LYNC_WEB_APP_CLIENT}
      {...props}
      _style={extendStyle(LYNC_WEB_APP_CLIENT, props)}
    />
  )
}
