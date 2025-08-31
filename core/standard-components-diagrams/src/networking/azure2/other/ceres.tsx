import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CERES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Ceres.svg;strokeColor=none;',
  _width: 59.199999999999996,
  _height: 68,
}

export function Ceres(props: DiagramNodeProps) {
  return <Shape {...CERES} {...props} _style={extendStyle(CERES, props)} />
}
