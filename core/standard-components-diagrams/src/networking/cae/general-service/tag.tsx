import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TAG = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Tag.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Tag(props: DiagramNodeProps) {
  return <Shape {...TAG} {...props} _style={extendStyle(TAG, props)} />
}
