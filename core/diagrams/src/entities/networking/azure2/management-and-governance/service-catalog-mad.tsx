import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVICE_CATALOG_MAD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Service_Catalog_MAD.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
}

export function ServiceCatalogMad(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SERVICE_CATALOG_MAD)} />
}
