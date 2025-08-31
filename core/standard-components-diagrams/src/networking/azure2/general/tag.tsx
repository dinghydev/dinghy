import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAG = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Tag.svg;strokeColor=none;',
  _width: 68,
  _height: 66.8,
}

export function Tag(props: DiagramNodeProps) {
  return <Shape {...TAG} {...props} _style={extendStyle(TAG, props)} />
}
