import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TALENT_ONBOARD = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/TalentOnboard.svg;',
  _width: 68,
  _height: 68,
}

export function TalentOnboard(props: DiagramNodeProps) {
  return <Shape {...TALENT_ONBOARD} {...props} />
}
