import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SERVICE_PACKAGE_FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.cloud_service_package_file;',
  },
  _original_width: 42.5,
  _original_height: 50,
}

export function CloudServicePackageFile(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CLOUD_SERVICE_PACKAGE_FILE)} />
  )
}
