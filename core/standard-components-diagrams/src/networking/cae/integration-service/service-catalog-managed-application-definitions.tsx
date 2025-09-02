import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVICE_CATALOG_MANAGED_APPLICATION_DEFINITIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Catalog_Managed_Application_Definitions.svg;strokeColor=none;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function ServiceCatalogManagedApplicationDefinitions(
  props: DiagramNodeProps,
) {
  return (
    <Shape
      {...SERVICE_CATALOG_MANAGED_APPLICATION_DEFINITIONS}
      {...props}
      _style={extendStyle(
        SERVICE_CATALOG_MANAGED_APPLICATION_DEFINITIONS,
        props,
      )}
    />
  )
}
