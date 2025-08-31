import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VERSIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Versions.svg;strokeColor=none;',
  _width: 62,
  _height: 60,
}

export function Versions(props: DiagramNodeProps) {
  return (
    <Shape {...VERSIONS} {...props} _style={extendStyle(VERSIONS, props)} />
  )
}
