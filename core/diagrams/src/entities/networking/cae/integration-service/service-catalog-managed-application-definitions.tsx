import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_CATALOG_MANAGED_APPLICATION_DEFINITIONS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Service_Catalog_Managed_Application_Definitions.svg;strokeColor=none;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function ServiceCatalogManagedApplicationDefinitions(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(
        props,
        SERVICE_CATALOG_MANAGED_APPLICATION_DEFINITIONS,
      )}
    />
  )
}
