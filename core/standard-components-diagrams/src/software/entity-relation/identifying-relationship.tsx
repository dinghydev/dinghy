import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IDENTIFYING_RELATIONSHIP = {
  _style:
    'shape=rhombus;double=1;perimeter=rhombusPerimeter;whiteSpace=wrap;html=1;align=center;',
  _width: 120,
  _height: 60,
}

export function IdentifyingRelationship(props: DiagramNodeProps) {
  return <Shape {...IDENTIFYING_RELATIONSHIP} {...props} />
}
