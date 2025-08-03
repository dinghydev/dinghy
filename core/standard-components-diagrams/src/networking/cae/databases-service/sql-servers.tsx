import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_SERVERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SQL_Servers.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function SqlServers(props: DiagramNodeProps) {
  return <Shape {...SQL_SERVERS} {...props} />
}
