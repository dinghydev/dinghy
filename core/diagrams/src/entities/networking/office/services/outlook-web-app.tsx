import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OUTLOOK_WEB_APP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.outlook_web_app;',
  },
  _width: 83,
  _height: 51,
}

export function OutlookWebApp(props: NodeProps) {
  return (
    <Shape
      {...OUTLOOK_WEB_APP}
      {...props}
      _style={extendStyle(OUTLOOK_WEB_APP, props)}
    />
  )
}
