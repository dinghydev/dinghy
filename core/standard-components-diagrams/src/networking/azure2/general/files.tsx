import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Files.svg;',
  _width: 64,
  _height: 70,
}

export function Files(props: DiagramNodeProps) {
  return <Shape {...FILES} {...props} />
}
