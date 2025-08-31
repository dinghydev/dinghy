import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RECENT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Recent.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Recent(props: DiagramNodeProps) {
  return <Shape {...RECENT} {...props} _style={extendStyle(RECENT, props)} />
}
