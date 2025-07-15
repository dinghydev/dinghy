import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASSOCIATION_INSTANCE_SECIFICATION = {
  _style: 'triangle;aspect=fixed;fillColor=strokeColor;',
  _width: 0,
  _height: 22,
}

export function AssociationInstanceSecification(props: DiagramNodeProps) {
  return <Shape {...ASSOCIATION_INSTANCE_SECIFICATION} {...props} />
}
