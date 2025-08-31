import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_WEB_APP_SERVICE = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.webplus_web_app_service;',
  _width: 60,
  _height: 60,
}

export function WebWebAppService(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_WEB_APP_SERVICE}
      {...props}
      _style={extendStyle(WEB_WEB_APP_SERVICE, props)}
    />
  )
}
