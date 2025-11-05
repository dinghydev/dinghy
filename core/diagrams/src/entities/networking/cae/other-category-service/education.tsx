import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EDUCATION = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Education.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 39,
}

export function Education(props: NodeProps) {
  return (
    <Shape {...EDUCATION} {...props} _style={extendStyle(EDUCATION, props)} />
  )
}
