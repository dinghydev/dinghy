import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVER_FARM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Server_Farm.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ServerFarm(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVER_FARM}
      {...props}
      _style={extendStyle(SERVER_FARM, props)}
    />
  )
}
