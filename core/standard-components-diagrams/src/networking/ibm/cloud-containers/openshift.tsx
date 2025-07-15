import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OPENSHIFT = {
  _style:
    'shape=rect;fillColor=#198038;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  _width: 0,
  _height: 48,
}

export function Openshift(props: DiagramNodeProps) {
  return <Shape {...OPENSHIFT} {...props} />
}
