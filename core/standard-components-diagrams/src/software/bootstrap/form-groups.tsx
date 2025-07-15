import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FORM_GROUPS = {
  _style:
    'fillColor=none;strokeColor=none;align=left;fontSize=14;fontColor=#212529;',
  _width: 0,
  _height: 150,
}

export function FormGroups(props: DiagramNodeProps) {
  return <Shape {...FORM_GROUPS} {...props} />
}
