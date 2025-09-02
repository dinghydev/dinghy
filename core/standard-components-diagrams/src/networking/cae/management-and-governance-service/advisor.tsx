import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADVISOR = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Advisor.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Advisor(props: DiagramNodeProps) {
  return <Shape {...ADVISOR} {...props} _style={extendStyle(ADVISOR, props)} />
}
