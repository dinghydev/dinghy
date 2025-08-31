import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_SERVICE_PACKAGE_FILE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.cloud_service_package_file;',
  _width: 42.5,
  _height: 50,
}

export function CloudServicePackageFile(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_SERVICE_PACKAGE_FILE}
      {...props}
      _style={extendStyle(CLOUD_SERVICE_PACKAGE_FILE, props)}
    />
  )
}
