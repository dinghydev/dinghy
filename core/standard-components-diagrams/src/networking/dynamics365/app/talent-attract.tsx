import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TALENT_ATTRACT = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/TalentAttract.svg;strokeColor=none;',
  },
  _width: 55.24,
  _height: 68,
}

export function TalentAttract(props: DiagramNodeProps) {
  return (
    <Shape
      {...TALENT_ATTRACT}
      {...props}
      _style={extendStyle(TALENT_ATTRACT, props)}
    />
  )
}
