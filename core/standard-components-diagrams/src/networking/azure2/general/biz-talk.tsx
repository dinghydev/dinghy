import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BIZ_TALK = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Biz_Talk.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 64,
}

export function BizTalk(props: DiagramNodeProps) {
  return (
    <Shape {...BIZ_TALK} {...props} _style={extendStyle(BIZ_TALK, props)} />
  )
}
