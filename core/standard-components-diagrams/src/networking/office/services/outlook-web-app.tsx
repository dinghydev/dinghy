import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OUTLOOK_WEB_APP = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.services.outlook_web_app;',
  },
  _original_width: 83,
  _original_height: 51,
}

export function OutlookWebApp(props: DiagramNodeProps) {
  return (
    <Shape
      {...OUTLOOK_WEB_APP}
      {...props}
      _style={extendStyle(OUTLOOK_WEB_APP, props)}
    />
  )
}
