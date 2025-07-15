import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIBRANCH_SHARED_ASSOCIATION = {
  _style: 'verticalAlign=bottom;html=1;ellipse;fillColor=strokeColor;',
  _width: 250,
  _height: 50,
}

export function MultibranchSharedAssociation(props: DiagramNodeProps) {
  return <Shape {...MULTIBRANCH_SHARED_ASSOCIATION} {...props} />
}
