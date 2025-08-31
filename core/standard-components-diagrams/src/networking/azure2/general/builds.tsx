import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUILDS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Builds.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Builds(props: DiagramNodeProps) {
  return <Shape {...BUILDS} {...props} _style={extendStyle(BUILDS, props)} />
}
