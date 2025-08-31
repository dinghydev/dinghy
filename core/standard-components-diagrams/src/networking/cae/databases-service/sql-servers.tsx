import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SQL_SERVERS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/SQL_Servers.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function SqlServers(props: DiagramNodeProps) {
  return (
    <Shape
      {...SQL_SERVERS}
      {...props}
      _style={extendStyle(SQL_SERVERS, props)}
    />
  )
}
