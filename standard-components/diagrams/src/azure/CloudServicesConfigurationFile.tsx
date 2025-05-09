import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

const COLOR = '#00BEF2'

export const CLOUD_SERVICES_CONFIGURATION_FILE = {
  _shape: {
    entity: 'mxgraph.azure.cloud_services_configuration_file',
  },
  _style: {
    element: {
      strokeColor: COLOR,
      fontColor: COLOR,
    },
    entity: {
      fillColor: COLOR,
    },
  },
}

export function CloudServicesConfigurationFile(
  props: DiagramNodeProps,
) {
  return <Shape {...CLOUD_SERVICES_CONFIGURATION_FILE} {...props} />
}
