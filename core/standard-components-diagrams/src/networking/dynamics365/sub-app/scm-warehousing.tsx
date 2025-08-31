import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCM_WAREHOUSING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/SCMWarehousing.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function ScmWarehousing(props: DiagramNodeProps) {
  return (
    <Shape
      {...SCM_WAREHOUSING}
      {...props}
      _style={extendStyle(SCM_WAREHOUSING, props)}
    />
  )
}
