import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VERSIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Versions.svg;',
  _width: 62,
  _height: 60,
}

export function Versions(props: DiagramNodeProps) {
  return <Shape {...VERSIONS} {...props} />
}
