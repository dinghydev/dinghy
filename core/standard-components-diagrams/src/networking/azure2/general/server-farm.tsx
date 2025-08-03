import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SERVER_FARM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Server_Farm.svg;strokeColor=none;',
  _width: 64,
  _height: 64,
}

export function ServerFarm(props: DiagramNodeProps) {
  return <Shape {...SERVER_FARM} {...props} />
}
