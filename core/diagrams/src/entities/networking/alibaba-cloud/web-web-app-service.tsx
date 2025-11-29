import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_WEB_APP_SERVICE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.webplus_web_app_service;',
  },
  _original_width: 54.900000000000006,
  _original_height: 54.900000000000006,
}

export function WebWebAppService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WEB_WEB_APP_SERVICE)} />
}
