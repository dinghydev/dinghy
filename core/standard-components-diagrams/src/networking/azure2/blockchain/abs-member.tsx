import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ABS_MEMBER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/ABS_Member.svg;strokeColor=none;',
  },
  _width: 56.00000000000001,
  _height: 65,
}

export function AbsMember(props: DiagramNodeProps) {
  return (
    <Shape {...ABS_MEMBER} {...props} _style={extendStyle(ABS_MEMBER, props)} />
  )
}
