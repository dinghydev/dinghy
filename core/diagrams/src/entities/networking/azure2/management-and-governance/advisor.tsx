import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ADVISOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Advisor.svg;strokeColor=none;',
  },
  _original_width: 66,
  _original_height: 64,
}

export function Advisor(props: DiagramNodeProps) {
  return <Shape {...ADVISOR} {...props} _style={extendStyle(ADVISOR, props)} />
}
