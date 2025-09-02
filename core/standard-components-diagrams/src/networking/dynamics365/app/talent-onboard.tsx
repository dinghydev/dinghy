import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TALENT_ONBOARD = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/TalentOnboard.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function TalentOnboard(props: DiagramNodeProps) {
  return (
    <Shape
      {...TALENT_ONBOARD}
      {...props}
      _style={extendStyle(TALENT_ONBOARD, props)}
    />
  )
}
