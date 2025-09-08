import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MANAGED_INSTANCE_APACHE_CASSANDRA = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Managed_Instance_Apache_Cassandra.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ManagedInstanceApacheCassandra(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_INSTANCE_APACHE_CASSANDRA}
      {...props}
      _style={extendStyle(MANAGED_INSTANCE_APACHE_CASSANDRA, props)}
    />
  )
}
