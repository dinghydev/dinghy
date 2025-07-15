import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCKER = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Docker.svg;',
  _width: 50,
  _height: 41,
}

export function Docker(props: DiagramNodeProps) {
  return <Shape {...DOCKER} {...props} />
}
