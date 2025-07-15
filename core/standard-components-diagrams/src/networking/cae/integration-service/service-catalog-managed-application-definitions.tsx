import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVICE_CATALOG_MANAGED_APPLICATION_DEFINITIONS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Catalog_Managed_Application_Definitions.svg;',
  _width: 47,
  _height: 50,
}

export function ServiceCatalogManagedApplicationDefinitions(
  props: DiagramNodeProps,
) {
  return (
    <Shape {...SERVICE_CATALOG_MANAGED_APPLICATION_DEFINITIONS} {...props} />
  )
}
