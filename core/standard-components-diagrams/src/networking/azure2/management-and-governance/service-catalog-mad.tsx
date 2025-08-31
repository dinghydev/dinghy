import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_CATALOG_MAD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Service_Catalog_MAD.svg;strokeColor=none;',
  },
  _width: 56.00000000000001,
  _height: 68,
}

export function ServiceCatalogMad(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVICE_CATALOG_MAD}
      {...props}
      _style={extendStyle(SERVICE_CATALOG_MAD, props)}
    />
  )
}
