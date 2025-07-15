import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIBRANCH_PART_ASSOCIATION = {
  _style:
    'verticalAlign=bottom;html=1;ellipse;fillColor=strokeColor;fontFamily=Helvetica;fontSize=11;fontColor=default;',
  _width: 250,
  _height: 50,
}

export function MultibranchPartAssociation(props: DiagramNodeProps) {
  return <Shape {...MULTIBRANCH_PART_ASSOCIATION} {...props} />
}
