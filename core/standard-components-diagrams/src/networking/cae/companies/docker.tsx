import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DOCKER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Docker.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 41,
}

export function Docker(props: DiagramNodeProps) {
  return <Shape {...DOCKER} {...props} _style={extendStyle(DOCKER, props)} />
}
