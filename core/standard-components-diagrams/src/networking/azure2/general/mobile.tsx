import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Mobile.svg;strokeColor=none;',
  },
  _width: 40,
  _height: 67,
}

export function Mobile(props: DiagramNodeProps) {
  return <Shape {...MOBILE} {...props} _style={extendStyle(MOBILE, props)} />
}
