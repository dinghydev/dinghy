import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTEGRATED_DIGITAL_EXPERIENCES = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/users/integrated_digital_experiences.svg;',
  _width: 60,
  _height: 60,
}

export function IntegratedDigitalExperiences(props: DiagramNodeProps) {
  return <Shape {...INTEGRATED_DIGITAL_EXPERIENCES} {...props} />
}
