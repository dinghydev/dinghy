import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SQL_SERVER_STRETCH_DB = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/dep/SQL_Server_Stretch_DB.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function SqlServerStretchDb(props: DiagramNodeProps) {
  return <Shape {...SQL_SERVER_STRETCH_DB} {...props} />
}
