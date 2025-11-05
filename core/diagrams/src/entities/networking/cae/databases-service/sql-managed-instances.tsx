import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SQL_MANAGED_INSTANCES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SQL_Managed_Instances.svg;strokeColor=none;',
  },
  _width: 38,
  _height: 50,
}

export function SqlManagedInstances(props: NodeProps) {
  return (
    <Shape
      {...SQL_MANAGED_INSTANCES}
      {...props}
      _style={extendStyle(SQL_MANAGED_INSTANCES, props)}
    />
  )
}
