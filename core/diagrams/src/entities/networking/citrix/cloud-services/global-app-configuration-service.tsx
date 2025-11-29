import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GLOBAL_APP_CONFIGURATION_SERVICE = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.global_app_configuration_service;',
  },
  _width: 50,
  _height: 37.705,
}

export function GlobalAppConfigurationService(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, GLOBAL_APP_CONFIGURATION_SERVICE)}
    />
  )
}
