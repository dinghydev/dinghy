import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OPENWHISK = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/miscellaneous/openwhisk.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Openwhisk(props: DiagramNodeProps) {
  return (
    <Shape {...OPENWHISK} {...props} _style={extendStyle(OPENWHISK, props)} />
  )
}
