import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQL_MANAGED_INSTANCE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/databases/SQL_Managed_Instance.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 64,
}

export function SqlManagedInstance(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SQL_MANAGED_INSTANCE)} />
}
