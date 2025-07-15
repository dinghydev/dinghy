import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTANCE_SPECIFICATION_3 = {
  _style: 'shape=rect;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  _width: 0,
  _height: 180,
}

export function InstanceSpecification3(props: DiagramNodeProps) {
  return <Shape {...INSTANCE_SPECIFICATION_3} {...props} />
}
