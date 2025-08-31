import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDUCATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Education.svg;strokeColor=none;',
  },
  _width: 67,
  _height: 52,
}

export function Education(props: DiagramNodeProps) {
  return (
    <Shape {...EDUCATION} {...props} _style={extendStyle(EDUCATION, props)} />
  )
}
