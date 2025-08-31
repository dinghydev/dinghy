import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLOBE_ERROR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Globe_Error.svg;strokeColor=none;',
  _width: 56.00000000000001,
  _height: 66,
}

export function GlobeError(props: DiagramNodeProps) {
  return (
    <Shape
      {...GLOBE_ERROR}
      {...props}
      _style={extendStyle(GLOBE_ERROR, props)}
    />
  )
}
