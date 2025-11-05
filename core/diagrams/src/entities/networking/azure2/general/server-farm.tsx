import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SERVER_FARM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Server_Farm.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function ServerFarm(props: NodeProps) {
  return (
    <Shape
      {...SERVER_FARM}
      {...props}
      _style={extendStyle(SERVER_FARM, props)}
    />
  )
}
