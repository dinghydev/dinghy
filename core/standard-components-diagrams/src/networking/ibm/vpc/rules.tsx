import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RULES = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/vpc/Rules.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Rules(props: DiagramNodeProps) {
  return <Shape {...RULES} {...props} _style={extendStyle(RULES, props)} />
}
