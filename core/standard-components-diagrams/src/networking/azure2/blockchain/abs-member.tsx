import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ABS_MEMBER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/blockchain/ABS_Member.svg;',
  _width: 56.00000000000001,
  _height: 65,
}

export function AbsMember(props: DiagramNodeProps) {
  return <Shape {...ABS_MEMBER} {...props} />
}
