import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGED_INSTANCE_APACHE_CASSANDRA = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Managed_Instance_Apache_Cassandra.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function ManagedInstanceApacheCassandra(props: DiagramNodeProps) {
  return <Shape {...MANAGED_INSTANCE_APACHE_CASSANDRA} {...props} />
}
