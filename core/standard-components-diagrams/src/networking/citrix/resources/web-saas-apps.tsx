import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WEB_SAAS_APPS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.web_saas_apps;',
  },
  _original_width: 50,
  _original_height: 38.45,
}

export function WebSaasApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_SAAS_APPS}
      {...props}
      _style={extendStyle(WEB_SAAS_APPS, props)}
    />
  )
}
