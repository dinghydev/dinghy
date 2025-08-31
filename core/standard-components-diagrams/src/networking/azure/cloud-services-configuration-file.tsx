import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SERVICES_CONFIGURATION_FILE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.cloud_services_configuration_file;pointerEvents=1;',
  _width: 47.5,
  _height: 50,
}

export function CloudServicesConfigurationFile(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SERVICES_CONFIGURATION_FILE}
      {...props}
      _style={extendStyle(CLOUD_SERVICES_CONFIGURATION_FILE, props)}
    />
  )
}
