import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BIZ_TALK = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Biz_Talk.svg;strokeColor=none;',
  _width: 69,
  _height: 64,
}

export function BizTalk(props: DiagramNodeProps) {
  return <Shape {...BIZ_TALK} {...props} />
}
