import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFORMATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Information.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 64,
}

export function Information(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFORMATION}
      {...props}
      _style={extendStyle(INFORMATION, props)}
    />
  )
}
