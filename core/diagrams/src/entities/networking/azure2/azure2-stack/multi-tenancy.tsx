import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTI_TENANCY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_stack/Multi_Tenancy.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 65,
}

export function MultiTenancy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MULTI_TENANCY)} />
}
