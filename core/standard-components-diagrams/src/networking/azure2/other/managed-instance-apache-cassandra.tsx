import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_INSTANCE_APACHE_CASSANDRA = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Managed_Instance_Apache_Cassandra.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
