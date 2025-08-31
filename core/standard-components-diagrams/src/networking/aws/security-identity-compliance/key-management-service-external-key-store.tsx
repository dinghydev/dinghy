import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KEY_MANAGEMENT_SERVICE_EXTERNAL_KEY_STORE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.key_management_service_external_key_store;',
  _width: 60,
  _height: 60,
}

export function KeyManagementServiceExternalKeyStore(props: DiagramNodeProps) {
  return (
    <Shape
      {...KEY_MANAGEMENT_SERVICE_EXTERNAL_KEY_STORE}
      {...props}
      _style={extendStyle(KEY_MANAGEMENT_SERVICE_EXTERNAL_KEY_STORE, props)}
    />
  )
}
