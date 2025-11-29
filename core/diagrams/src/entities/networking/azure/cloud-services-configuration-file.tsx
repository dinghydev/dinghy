import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SERVICES_CONFIGURATION_FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.cloud_services_configuration_file;pointerEvents=1;',
  },
  _original_width: 47.5,
  _original_height: 50,
}

export function CloudServicesConfigurationFile(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CLOUD_SERVICES_CONFIGURATION_FILE)}
    />
  )
}
