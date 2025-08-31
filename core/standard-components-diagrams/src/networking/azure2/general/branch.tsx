import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BRANCH = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Branch.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Branch(props: DiagramNodeProps) {
  return <Shape {...BRANCH} {...props} _style={extendStyle(BRANCH, props)} />
}
