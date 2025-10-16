import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIELD_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/FieldService.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 63.75999999999999,
}

export function FieldService(props: DiagramNodeProps) {
  return (
    <Shape
      {...FIELD_SERVICE}
      {...props}
      _style={extendStyle(FIELD_SERVICE, props)}
    />
  )
}
