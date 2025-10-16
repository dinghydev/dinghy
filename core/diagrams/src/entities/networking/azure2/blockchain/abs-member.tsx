import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ABS_MEMBER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/ABS_Member.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 65,
}

export function AbsMember(props: DiagramNodeProps) {
  return (
    <Shape {...ABS_MEMBER} {...props} _style={extendStyle(ABS_MEMBER, props)} />
  )
}
