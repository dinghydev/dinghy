import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SKYPE_FOR_BUSINESS_WEB_APP_CLIENT = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.skype_for_business_web_app_client;',
  },
  _width: 80,
  _height: 51,
}

export function SkypeForBusinessWebAppClient(props: NodeProps) {
  return (
    <Shape
      {...SKYPE_FOR_BUSINESS_WEB_APP_CLIENT}
      {...props}
      _style={extendStyle(SKYPE_FOR_BUSINESS_WEB_APP_CLIENT, props)}
    />
  )
}
