import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GLOBE_ERROR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Globe_Error.svg;',
  _width: 56.00000000000001,
  _height: 66,
}

export function GlobeError(props: DiagramNodeProps) {
  return <Shape {...GLOBE_ERROR} {...props} />
}
