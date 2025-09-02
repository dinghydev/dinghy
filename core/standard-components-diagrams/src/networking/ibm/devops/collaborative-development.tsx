import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COLLABORATIVE_DEVELOPMENT = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/devops/collaborative_development.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function CollaborativeDevelopment(props: DiagramNodeProps) {
  return (
    <Shape
      {...COLLABORATIVE_DEVELOPMENT}
      {...props}
      _style={extendStyle(COLLABORATIVE_DEVELOPMENT, props)}
    />
  )
}
