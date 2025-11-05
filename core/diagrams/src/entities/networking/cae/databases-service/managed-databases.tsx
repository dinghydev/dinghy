import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGED_DATABASES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Managed_Databases.svg;strokeColor=none;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function ManagedDatabases(props: NodeProps) {
  return (
    <Shape
      {...MANAGED_DATABASES}
      {...props}
      _style={extendStyle(MANAGED_DATABASES, props)}
    />
  )
}
