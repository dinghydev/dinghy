import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLOBAL_APP_CONFIGURATION_SERVICE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.global_app_configuration_service;',
  },
  _width: 50,
  _height: 37.705,
}

export function GlobalAppConfigurationService(props: DiagramNodeProps) {
  return (
    <Shape
      {...GLOBAL_APP_CONFIGURATION_SERVICE}
      {...props}
      _style={extendStyle(GLOBAL_APP_CONFIGURATION_SERVICE, props)}
    />
  )
}
