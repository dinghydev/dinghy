import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CACHE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Cache.svg;',
  _width: 64,
  _height: 64,
}

export function Cache(props: DiagramNodeProps) {
  return <Shape {...CACHE} {...props} />
}
