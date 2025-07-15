import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FIELD_SERVICE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/FieldService.svg;',
  _width: 68,
  _height: 63.75999999999999,
}

export function FieldService(props: DiagramNodeProps) {
  return <Shape {...FIELD_SERVICE} {...props} />
}
