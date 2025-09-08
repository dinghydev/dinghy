import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MOBILE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Mobile.svg;strokeColor=none;',
  },
  _original_width: 40,
  _original_height: 67,
}

export function Mobile(props: DiagramNodeProps) {
  return <Shape {...MOBILE} {...props} _style={extendStyle(MOBILE, props)} />
}
