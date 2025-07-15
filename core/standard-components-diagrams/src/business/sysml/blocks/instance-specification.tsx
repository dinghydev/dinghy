import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INSTANCE_SPECIFICATION = {
  _style: 'shape=rect;html=1;overflow=fill;fontSize=15;whiteSpace=wrap;',
  _width: 70,
  _height: 30,
}

export function InstanceSpecification(props: DiagramNodeProps) {
  return <Shape {...INSTANCE_SPECIFICATION} {...props} />
}
