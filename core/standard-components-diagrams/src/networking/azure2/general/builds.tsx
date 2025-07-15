import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUILDS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Builds.svg;',
  _width: 64,
  _height: 64,
}

export function Builds(props: DiagramNodeProps) {
  return <Shape {...BUILDS} {...props} />
}
